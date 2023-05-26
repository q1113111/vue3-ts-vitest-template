module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:vue/vue3-recommended',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020
  },
  rules: {
    // 'semi': [2, 'never']
  }
}
