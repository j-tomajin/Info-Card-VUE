/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  "extends": [
    "plugin:prettier/recommended"
  ],

  "plugins": ["prettier"],

  "rules": {
    "prettier/prettier": "error"
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
