import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: "./src/index.jsx", // Spécifie explicitement index.jsx comme point d'entrée
      },
    },
  },
});