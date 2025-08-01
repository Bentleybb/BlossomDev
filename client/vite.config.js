import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const { PORT = 3000 } = process.env;
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // 👈 enables 'expect', 'describe', 'test' globally
    environment: "jsdom", // 👈 necessary for DOM testing
  },
  server: {
    proxy: {
      "/api": {
        target: `http://localhost:${PORT}`,
        changeOrigin: true,
      },
      "/auth": {
        target: `http://localhost:${PORT}`,
        changeOrigin: true,
      },
    },
  },

  build: {
    outDir: "dist/app",
  }
  
});
