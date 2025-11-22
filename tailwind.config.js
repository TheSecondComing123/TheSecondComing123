/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: 'oklch(62.7% 0.194 149.214)',
                secondary: 'oklch(44.8% 0.119 151.328)',
            },
        },
    },
    plugins: [],
}
