import { defineContentConfig, defineCollection, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    // Blog posts
    insights: defineCollection({
      type: 'page',
      source: 'insights/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.any(),
        tags: z.array(z.string()).default([]),
        category: z.string().optional(),
        draft: z.boolean().default(false),
        cover: z.string().optional(),
        readTime: z.number().optional(),
      }),
    }),

    // Lab / OSS projects
    lab: defineCollection({
      type: 'page',
      source: 'lab/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        repo: z.string(),
        language: z.string(),
        tags: z.array(z.string()).default([]),
        stars: z.number().optional(),
        featured: z.boolean().default(false),
        status: z.enum(['active', 'maintenance', 'archived']).default('active'),
      }),
    }),
  },
});
