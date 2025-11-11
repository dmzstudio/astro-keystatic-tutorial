// astro.config.mjs
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

// works reliably in Bun, Node, Vite, etc.
const isBuild = import.meta.env.PROD;

// https://astro.build/config
export default defineConfig({
   integrations: [react(), markdoc(), ...(isBuild ? [] : [keystatic()])],
});
