import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import pkg from "./package.json";

const external = ["@bem/sdk.naming.entity"];

export default {
  input: "src/index.js",
  external,
  output: [
    {
      file: pkg.main,
      format: "cjs"
    },
    {
      file: pkg.browser,
      format: "umd",
      name: pkg.browser
    },
    { file: pkg.module, format: "es" }
  ],
  plugins: [resolve(), commonjs()]
};
