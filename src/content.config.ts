// src/content/config.ts
import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const posts = defineCollection({
   loader: glob({ pattern: "**/*.mdoc", base: "./src/content/posts" }),
   schema: ({ image }) =>
      z.object({
         title: z.string(),
         summary: z.string(),
         date: z.date(),
         cover: image().optional(),
      }),
});

const pages = defineCollection({
   loader: glob({ pattern: "**/*.mdoc", base: "./src/content/pages" }),
   schema: z.object({
      title: z.string(),
      content: z.string().optional(),
   }),
});

export const collections = {
   posts,
   pages,
};
