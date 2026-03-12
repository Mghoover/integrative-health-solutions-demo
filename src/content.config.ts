import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    image: z.string(),
    category: z.enum(['primary', 'additional'])
  })
});

export const collections = {
  services
};
