import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    quasar({
      // sassVariables: "src/quasar-variables.sass",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    postcss: "./postcss.config.js",
  },
  server: {
    port: 9000,
    open: true,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
