module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018
  },
  plugins: ['react', 'jest'],
  rules: {
    'no-unused-vars': 'off',
    'no-underscore-dangle': 'off',
    'prefer-destructuring': 1,
    'arrow-body-style': 1,
    'no-console': 0,
    'no-use-before-define': 'warn',
    'no-plusplus': 'off',
    'class-methods-use-this': 'off'
  }
};
