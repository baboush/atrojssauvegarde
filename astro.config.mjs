import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    css: {
      transformer: "postcss",
    },
  },
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
