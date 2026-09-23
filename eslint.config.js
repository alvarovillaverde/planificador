export default [
  {
    files: ["**/*.js", "tests/**/*.ts"],

    ignores: ["node_modules/**", "dist/**"],

    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      eqeqeq: "error",
      quotes: ["error", "double"],
      semi: ["error", "always"],
    },
  },
];
