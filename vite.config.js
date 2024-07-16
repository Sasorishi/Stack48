/* eslint-disable import/no-extraneous-dependencies */
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      _layout: path.resolve(__dirname, "./src/layout"),
      _components: path.resolve(__dirname, "./src/components"),
      _assets: path.resolve(__dirname, "./src/assets"),
      _images: path.resolve(__dirname, "./src/assets/images"),
    },
  },
});
