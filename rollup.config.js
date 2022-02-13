import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";
import externalGlobals from "rollup-plugin-external-globals";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const name = require("./package.json").main.replace(/\.js$/, "");

const bundle = (config) => ({
  ...config,
  input: "src/index.ts",
  external: (id) => !/^[./]/.test(id),
});

// eslint-disable-next-line import/no-default-export
export default [
  bundle({
    plugins: [
      esbuild({
        sourceMap: false,
        minify: true,
      }),
    ],
    output: [
      {
        file: `${name}.js`,
        format: "cjs",
        globals: {
          blizzapi: "blizzapi",
        },
      },
      {
        file: `${name}.mjs`,
        format: "es",
        globals: {
          blizzapi: "blizzapi",
        },
      },
    ],
    context: "this",
  }),
  bundle({
    plugins: [
      esbuild({
        sourceMap: false,
        minify: true,
      }),
      externalGlobals({
        blizzapi: "blizzapi",
      }),
    ],
    output: {
      file: `${name}.umd.js`,
      format: "umd",
      name: "StarCraft2-API",
      globals: {
        blizzapi: "blizzapi",
      },
    },
    context: "this",
  }),
  bundle({
    plugins: [dts()],
    output: {
      file: `${name}.d.ts`,
      format: "es",
    },
  }),
];
