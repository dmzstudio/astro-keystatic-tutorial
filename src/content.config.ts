// src/content.config.ts
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

export const colllections = {
   posts,
};
