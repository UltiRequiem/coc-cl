import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "lib",
  format: ["cjs"],
  minify: true,
  external: ["coc.nvim"],
});
