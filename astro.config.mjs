import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  vite: {
    build: {
      cssCodeSplit: false,
    },
  },
  integrations: [sitemap(), tailwind({ applyBaseStyles: false })],
  build: {
    format: "file",
    inlineStylesheets: "never",
  },
  compressHTML: false,
  output: "static",
  site: "https://detikstatic-ui.github.io",
  base: "/test-carousel/",
});
