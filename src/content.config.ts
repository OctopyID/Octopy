import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const collections = {
    posts: defineCollection({
        loader: glob({
            base: './src/posts',
            pattern: '**/*.{md,mdx}',
        }),
        schema: z.object({
            title: z.string(),
            category: z.string().optional(),
            tags: z.array(z.string()).optional(),
            date: z.string(),
        }),
    }),
};
