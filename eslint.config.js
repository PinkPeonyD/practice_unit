export default [
  {
    ignores: [
      'coverage/**',
      'reports/**',
      'node_modules/**',
      '.husky/**',
      'tmp/**',
      '.git/**',
    ],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        browser: true,
        node: true,
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
      },
    },
    rules: {
      // Code style
      quotes: ['error', 'single'],
      'max-len': ['error', { code: 120 }],
      semi: ['error', 'always'],
      indent: ['error', 2],
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'comma-dangle': ['error', 'always-multiline'],
      'object-curly-spacing': ['error', 'always'],

      // Rules for variables
      'no-var': 'error',
      'prefer-const': 'error',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      camelcase: ['error', { properties: 'always' }],

      // Rules for functions
      'arrow-spacing': ['error', { before: true, after: true }],
      'space-before-function-paren': ['error', 'never'],
      'func-call-spacing': ['error', 'never'],
      'no-console': 'warn',

      // Logic and structure
      eqeqeq: ['error', 'always'],
      'no-else-return': 'error',
      curly: ['error', 'all'],
      'no-fallthrough': 'error',
      'default-case': 'error',

      // Security
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error',
      'no-prototype-builtins': 'error',

      // ES6+
      'prefer-arrow-callback': 'error',
      'no-duplicate-imports': 'error',
      'template-curly-spacing': ['error', 'never'],
      'rest-spread-spacing': ['error', 'never'],

      // Miscellaneous
      'no-debugger': 'warn',
      'no-undef': 'error',
      'consistent-return': 'error',
    },
  },
];
