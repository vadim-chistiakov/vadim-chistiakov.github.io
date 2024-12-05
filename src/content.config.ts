import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

export const collections = {
	services: defineCollection({
		// Load Markdown files in the src/content/services directory.
		loader: glob({ base: './src/content/services', pattern: '**/*.md', }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			price: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
		}),
	}),
};
