import { defineCachedEventHandler, getQuery, createError } from '#imports';

export default defineCachedEventHandler(
  async (event) => {
    const query = getQuery(event);
    const repo = query.repo as string;

    if (!repo) {
      throw createError({ statusCode: 400, statusMessage: 'Repository is required' });
    }

    try {
      const data = await $fetch<any>(`https://api.github.com/repos/${repo}`, {
        headers: {
          'User-Agent': 'OctopyID-Portfolio',
        },
      });

      return {
        stars: data.stargazers_count || 0,
        forks: data.forks_count || 0,
      };
    } catch (error) {
      // Return 0 if repo doesn't exist, is private, or rate limited
      return { stars: 0, forks: 0 };
    }
  },
  {
    name: 'github-repo-stats',
    maxAge: 3600, // Cache for 1 hour to prevent API rate limits
    getKey: (event) => {
      const query = getQuery(event);
      return query.repo as string;
    },
  },
);
