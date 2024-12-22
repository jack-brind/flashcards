import { defineConfig } from "vite";

export default defineConfig({
  assetsInclude: ["**/*.md"],
  publicDir: "public",
  plugins: [],
  server: {
    port: 3000,
    open: true,
  },
});
