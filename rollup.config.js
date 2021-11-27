import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";

export default {
  input: "./src/main.ts",
  output: {
    file: "./dist/index.js",
    format: "cjs",
  },
  plugins: [commonjs(), typescript()],
  external: ["i18next", "i18next-cli-language-detector"],
};
