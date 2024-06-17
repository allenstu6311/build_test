import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue2";
import path from "path";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  base:'/',
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@pages": path.resolve(__dirname, "src/pages"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        "co-index": path.resolve(__dirname, "src/pages/co-home/index.html"),
        "ex-index": path.resolve(__dirname, "src/pages/ex-home/index.html"),
      },
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
  },
});
