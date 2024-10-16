import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], // Configuration for all files with specified extensions
        settings: {
            react: {
                version: 'detect', // Automatically detect the React version
            },
        },
        languageOptions: {
            globals: {
                ...globals.browser, // Include browser global variables
                ...globals.node, // Include Node.js global variables
            },
        },
        rules: {
            semi: ['error', 'always'], // Require semicolons
            'brace-style': 'error', // Enforce consistent brace style
            indent: ['error', 4, {SwitchCase: 1, ignoredNodes: ['ConditionalExpression']}], // Enforce a consistent indentation of 4 spaces
            'unused-imports/no-unused-imports': 'error', // Disallow unused imports
            'no-unused-vars': 'off', // Turn off the base no-unused-vars rule
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    varsIgnorePattern: '^_', // Ignore variables starting with an underscore
                },
            ],
            'simple-import-sort/imports': 'error', // Sort imports
            'simple-import-sort/exports': 'error', // Sort exports
            'no-multiple-empty-lines': ['error', {max: 1, maxEOF: 0, maxBOF: 0}], // Limit multiple empty lines
            'no-trailing-spaces': 'error', // Disallow trailing spaces
            'space-infix-ops': 'error', // Require spacing around operators,
            'react/react-in-jsx-scope': 'off',
        },
        plugins: {
            'unused-imports': unusedImports,
            'simple-import-sort': simpleImportSort,
        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
];
