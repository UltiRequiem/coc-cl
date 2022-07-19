/* eslint-disable unicorn/prefer-module */

const process = require("node:process");
const esbuild = require("esbuild");

async function start(watch) {
  await esbuild.build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    watch,
    minify: process.env.NODE_ENV === "production",
    sourcemap: process.env.NODE_ENV === "development",
    mainFields: ["module", "main"],
    external: ["coc.nvim"],
    platform: "node",
    target: "node10.12",
    outfile: "lib/index.js",
  });
}

let watch = false;

if (process.argv.length > 2 && process.argv[2] === "--watch") {
  console.log("watching...");
  watch = {
    onRebuild(error) {
      if (error) {
        console.error("watch build failed:", error);
      } else {
        console.log("watch build succeeded");
      }
    },
  };
}

start(watch).catch((error) => {
  console.error(error);
});
