module.exports = {
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/display-name": "off",
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ["react"],
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parser: "babel-eslint",
}
