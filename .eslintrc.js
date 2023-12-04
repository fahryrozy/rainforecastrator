module.exports = {
  root: true,
  extends: ['@react-native', 'prettier'],
  plugins: ['prettier', 'react-hooks'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'prettier/prettier': [
          'error',
          {
            endOfLine: 'auto',
          },
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'off',
      },
    },
  ],
  ignorePatterns: ['**/__test__/**'],
};
