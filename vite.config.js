import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react()],
  publicDir: resolve(__dirname, "public"),
});
