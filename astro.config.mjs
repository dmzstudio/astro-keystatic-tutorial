// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

// works reliably in Bun, Node, Vite, etc.
const isDev = import.meta.env.DEV;
const isBuild = import.meta.env.PROD;

// https://astro.build/config
export default defineConfig({
   integrations: [react(), markdoc(), ...(isBuild ? [] : [keystatic()])],
   vite: {
      build: {
         rollupOptions: {
            // include content images as static assets
            input: ["src/content/posts/**/*.{jpg, jpeg, png, webp, svg}"],
         },
      },
      assetsInclude: [
         "**/src/content/posts/**/*.{jpg, jpeg, png, webp, svg}",
         "**/src/content/pages/**/*.{jpg, jpeg, png, webp, svg}",
      ],
   },
});
