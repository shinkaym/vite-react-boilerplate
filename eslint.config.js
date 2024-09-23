import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import stylisticJs from '@stylistic/eslint-plugin-js'

export default [
  { ignores: ['dist', 'vite.config.js'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module'
      }
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: eslintPluginPrettier,
      '@stylistic/js': stylisticJs
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      // prettier
      'prettier/prettier': [
        'warn',
        {
          semi: false,
          trailingComma: 'none',
          tabWidth: 2,
          endOfLine: 'auto',
          useTabs: false,
          singleQuote: true,
          printWidth: 120,
          jsxSingleQuote: true
        }
      ],
      // eslint
      'no-useless-catch': 0,
      'no-console': 1,
      // 'no-extra-boolean-cast': 0,
      'no-lonely-if': 1,
      'no-unused-vars': 1,
      'no-unexpected-multiline': 1,
      // stylistic/js
      '@stylistic/js/no-trailing-spaces': 1,
      '@stylistic/js/no-multi-spaces': 1,
      '@stylistic/js/no-multiple-empty-lines': 1,
      '@stylistic/js/space-before-blocks': [2, 'always'],
      '@stylistic/js/object-curly-spacing': [1, 'always'],
      '@stylistic/js/indent': ['warn', 2],
      '@stylistic/js/quotes': [2, 'single'],
      '@stylistic/js/array-bracket-spacing': 1,
      '@stylistic/js/linebreak-style': 0,
      '@stylistic/js/keyword-spacing': 1,
      '@stylistic/js/comma-dangle': 1,
      '@stylistic/js/comma-spacing': 1
    }
  }
]
