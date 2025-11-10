// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

// works reliably in Bun, Node, Vite, etc.
const isDev = import.meta.env.DEV;
const isProd = import.meta.env.PROD;

// https://astro.build/config
export default defineConfig({
   output: "static", // <- tells Astro to build a static HTML
   integrations: [react(), markdoc(), ...(isDev ? [keystatic()] : [])],
});
