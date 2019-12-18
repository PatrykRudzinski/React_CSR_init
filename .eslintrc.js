module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "airbnb"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module",
    allowImportExportEverywhere: true,
  },
  plugins: [
    "react"
  ],
  rules: {
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "arrow-parens": "off",
    "import/prefer-default-export": "off",
    "no-plusplus": "off",
    "react/button-has-type": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"]
      }
    }
  }
};
