import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sass from "sass";

// https://vitejs.dev/config/

export default defineConfig({
  base: "/SessionBreakTimer/", // Zmień na nazwę swojego repozytorium [GitHub Pages](https://www.google.com/search?q=GitHub%20Pages)
  build: {
    assetsDir: "", // Wyłączenie dodawania podkatalogu dla zasobów
  },
  plugins: [react()],
  css: {
    preprocessorOptions: {
      sass: {
        implementation: sass,
      },
    },
  },
});
