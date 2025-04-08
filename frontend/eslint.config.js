// Import the base JavaScript ESLint configuration from the '@eslint/js' package
import js from '@eslint/js'

// Import global variables for different environments (e.g., browser, Node.js) from the 'globals' package
import globals from 'globals'

// Import the React Hooks ESLint plugin to enforce rules of hooks
import reactHooks from 'eslint-plugin-react-hooks'

// Import the React Refresh ESLint plugin to enforce rules for React Fast Refresh
import reactRefresh from 'eslint-plugin-react-refresh'

// Import the TypeScript ESLint configuration utilities
import tseslint from 'typescript-eslint'

// Export the ESLint configuration using TypeScript ESLint's configuration utility
export default tseslint.config(
  // Specify files or directories to ignore during linting
  { ignores: ['dist'] }, // Ignore the 'dist' directory, which typically contains build artifacts

  {
    // Extend the recommended ESLint configurations for JavaScript and TypeScript
    extends: [js.configs.recommended, ...tseslint.configs.recommended],

    // Specify the file patterns to apply this configuration to
    files: ['**/*.{ts,tsx}'], // Apply to all TypeScript and TSX files

    // Define language options for the linter
    languageOptions: {
      ecmaVersion: 2020, // Use ECMAScript 2020 syntax
      globals: globals.browser, // Include browser-specific global variables
    },

    // Define plugins to extend ESLint functionality
    plugins: {
      'react-hooks': reactHooks, // Add React Hooks plugin to enforce hook rules
      'react-refresh': reactRefresh, // Add React Refresh plugin for Fast Refresh rules
    },

    // Define custom linting rules
    rules: {
      // Include recommended rules from the React Hooks plugin
      ...reactHooks.configs.recommended.rules,

      // Add a custom rule from the React Refresh plugin
      'react-refresh/only-export-components': [
        'warn', // Warn if the rule is violated
        { allowConstantExport: true }, // Allow exporting constant components
      ],
    },
  },
)
