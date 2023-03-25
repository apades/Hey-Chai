module.exports = {
  root: true,
  env: {
    es2022: true,
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ['dist', 'lib', 'public', '**/auto-imports.d.ts'],
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-unused-vars': 0,
    'prefer-const': 0,
    /** 允许非空断言 */
    '@typescript-eslint/no-non-null-assertion': 'off',
    // 临时的
    '@typescript-eslint/no-explicit-any': 0,
    'react-hooks/exhaustive-deps': 0,
    '@typescript-eslint/no-extra-semi': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'no-async-promise-executor': 0,
  },
}
