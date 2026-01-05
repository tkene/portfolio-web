import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";
import path from "path";
import { fileURLToPath } from "url";
import { copyFileSync, mkdirSync, existsSync } from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Plugin pour copier Vanta dans le dossier public
const copyVantaPlugin = () => {
  return {
    name: "copy-vanta",
    buildStart() {
      const vantaSource = path.resolve(
        __dirname,
        "node_modules/vanta/dist/vanta.halo.min.js"
      );
      const publicDir = path.resolve(__dirname, "public");
      const vantaDest = path.resolve(publicDir, "vanta.halo.min.js");

      if (existsSync(vantaSource)) {
        if (!existsSync(publicDir)) {
          mkdirSync(publicDir, { recursive: true });
        }
        copyFileSync(vantaSource, vantaDest);
        console.log("✓ Vanta HALO copié dans public/");
      }
    },
  };
};

export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    quasar({
      // sassVariables: "src/quasar-variables.sass",
    }),
    copyVantaPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: [".js", ".json"],
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
    rollupOptions: {
      output: {
        manualChunks: {
          vanta: ["vanta"],
        },
      },
    },
    commonjsOptions: {
      include: [/vanta/, /node_modules/],
    },
  },
  optimizeDeps: {
    include: ["vanta"],
    exclude: ["vanta/dist/vanta.halo.min.js"],
  },
});
