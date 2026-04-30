// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Refreshing dev server to pick up file system changes
export default defineConfig({
  plugins: [react()],
});
