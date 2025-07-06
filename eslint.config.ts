import globals from 'globals';
import parserTs from '@typescript-eslint/parser';
import eslintPluginTs from '@typescript-eslint/eslint-plugin';
import eslintPluginPerfectionist from 'eslint-plugin-perfectionist';
// // @ts-expect-error: no types for tailwindcss plugin
// import tailwindcss from 'eslint-plugin-tailwindcss';
// import js from '@eslint/js';

export default [
  // js.configs.recommended,
  {
    ignores: ['.*', 'node_modules/**', 'dist/**'],
  },

  {
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
      },
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    plugins: {
      '@typescript-eslint': eslintPluginTs,
      perfectionist: eslintPluginPerfectionist,
      // tailwindcss,
    },
    rules: {
      // TypeScript rules
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/consistent-type-imports': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-misused-promises': [
        'off',
        {
          checksVoidReturn: false,
        },
      ],

      // JavaScript rules
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
      'no-duplicate-imports': 'error',
      'no-trailing-spaces': 'error',
      'object-shorthand': ['error', 'always'],
      'prefer-const': ['error', { destructuring: 'all' }],
      'arrow-body-style': ['error', 'as-needed'],
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      'default-case': 'warn',

      // Import sorting
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'line-length',
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
          ],
          newlinesBetween: 'always',
        },
      ],
      'perfectionist/sort-named-imports': [
        'error',
        {
          type: 'line-length',
        },
      ],

      // Formatting
      semi: ['error', 'always'],
      quotes: ['error', 'single', { avoidEscape: true }],
      'comma-dangle': ['error', 'always-multiline'],

      // // Tailwind CSS
      // 'tailwindcss/classnames-order': 'warn',
      // 'tailwindcss/no-custom-classname': 'off',
    },
  },
];
