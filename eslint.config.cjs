module.exports = [
    {
        ignores: [
            "**/*.d.ts",
            ".next/",
            "node_modules/",
        ],
    },

    {
        files: ["**/*.{js,cjs,mjs,ts,tsx}"],
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

        settings: {
            react: { version: "detect" },
        },
        rules: {},
    },
];
