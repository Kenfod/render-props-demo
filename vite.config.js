import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Keeps your familiar local server port
    open: true // Automatically opens the app in your browser
  }
});
