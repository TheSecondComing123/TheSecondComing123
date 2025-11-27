// Flat config for ESLint v9+
// Keep ignores and provide a minimal files config so ESLint starts cleanly.
module.exports = [
    // Files and directories to ignore (replaces .eslintignore)
    {
        ignores: [
            "**/*.d.ts",
            ".next/",
            "node_modules/",
        ],
    },

    // Minimal configuration for JS/TS files. Avoid using `extends` or `overrides`
    // which are not supported directly in flat config objects. This keeps ESLint
    // runnable under v9; you can add rule sets here as needed.
    {
        files: ["**/*.{js,cjs,mjs,ts,tsx}"],
        // Use the TypeScript parser so ESLint can parse TS/TSX and modern syntax.
        languageOptions: {
            parser: (() => {
                try {
                    return require("@typescript-eslint/parser");
                } catch (e) {
                    return undefined;
                }
            })(),
            parserOptions: {
                ecmaVersion: 2024,
                sourceType: "module",
                ecmaFeatures: { jsx: true },
            },
        },
        // Basic settings; additional rules/plugins can be added later.
        settings: {
            react: { version: "detect" },
        },
        rules: {},
    },
];
