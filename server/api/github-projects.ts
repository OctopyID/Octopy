import { defineCachedEventHandler } from '#imports'
import { githubRepos } from '../../app/config/projects'

interface Project {
  id: string
  name: string
  description: string
  stars: number
  forks: number
  language: string
  url: string
  docs: string
}

export default defineCachedEventHandler(async (event): Promise<Project[]> => {
  const projects = await Promise.all(
    githubRepos.map(async (repo) => {
      try {
        const data = await $fetch<any>(`https://api.github.com/repos/${repo}`, {
          headers: {
            'User-Agent': 'OctopyID-Portfolio'
          }
        })
        return {
          id: repo,
          name: data.name,
          description: data.description,
          stars: data.stargazers_count,
          forks: data.forks_count,
          language: data.language,
          url: data.html_url,
          docs: `https://raw.githubusercontent.com/${repo}/refs/heads/main/README.md`
        }
      } catch (e) {
        // Fallback gracefully if GitHub rate limits us or repo is private
        const name = repo.split('/')[1]
        return {
          id: repo,
          name: name,
          description: 'Failed to fetch repository data.',
          stars: 0,
          forks: 0,
          language: 'Unknown',
          url: `https://github.com/${repo}`,
          docs: ''
        }
      }
    })
  )
  
  return projects
}, {
  name: 'github-projects',
  maxAge: 3600 // Cache for 1 hour to prevent API limits
})
