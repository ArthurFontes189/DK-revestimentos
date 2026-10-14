import js from '@eslint/js';
import ts from 'typescript-eslint';

export default [
  {
    ignores: ['node_modules', 'dist', 'build', '.astro']
  },
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' }
      ],
      '@typescript-eslint/no-explicit-any': 'warn'
    }
  }
];
