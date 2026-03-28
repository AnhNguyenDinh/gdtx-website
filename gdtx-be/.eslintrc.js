module.exports = {
  env: { node: true, es2021: true, jest: true },
  extends: ['airbnb-base'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  rules: {
    'no-console': 'warn',
    'no-underscore-dangle': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.test.js'] }],
  },
};
