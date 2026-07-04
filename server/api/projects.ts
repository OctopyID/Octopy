import { defineCachedEventHandler } from '#imports';
import { githubRepos } from '../../app/config/projects';

interface Project {
  id: string;
  slug: string;
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  url: string;
  docs: string;
}

export default defineCachedEventHandler(
  async (event): Promise<Project[]> => {
    const projects = await Promise.all(
      githubRepos.map(async (project) => {
        try {
          const data = await $fetch<any>(`https://api.github.com/repos/${project.repo}`, {
            headers: {
              'User-Agent': 'OctopyID-Portfolio',
            },
          });
          return {
            id: project.repo,
            slug: project.slug,
            name: project.name,
            description: project.desc || data.description,
            stars: data.stargazers_count,
            forks: data.forks_count,
            language: data.language,
            url: project.link,
            docs: project.docs,
          };
        } catch (e) {
          // Fallback gracefully if GitHub rate limits us or repo is private
          return {
            id: project.repo,
            slug: project.slug,
            name: project.name,
            description: project.desc || 'Failed to fetch repository data.',
            stars: 0,
            forks: 0,
            language: 'Unknown',
            url: project.link,
            docs: project.docs,
          };
        }
      }),
    );

    return projects;
  },
  {
    name: 'github-projects-v2',
    maxAge: 3600, // Cache for 1 hour to prevent API limits
  },
);
