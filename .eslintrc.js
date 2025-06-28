module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    "react/react-in-jsx-scope": "off",   // you no longer need React in scope
    "react/no-unknown-property": "off"   // optionally, but usually check your props carefully
  }
};