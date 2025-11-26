/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: 'oklch(0.627 0.194 149.214)',
                secondary: 'oklch(0.448 0.119 151.328)',
                green: {
                    50: 'oklch(0.982 0.018 155.826)',
                    100: 'oklch(0.962 0.044 156.743)',
                    200: 'oklch(0.925 0.084 155.995)',
                    300: 'oklch(0.871 0.15 154.449)',
                    400: 'oklch(0.792 0.209 151.711)',
                    500: 'oklch(0.723 0.219 149.579)',
                    600: 'oklch(0.627 0.194 149.214)',
                    700: 'oklch(0.527 0.154 150.069)',
                    800: 'oklch(0.448 0.119 151.328)',
                    900: 'oklch(0.393 0.095 152.535)',
                    950: 'oklch(0.266 0.065 152.934)',
                },
            },
            fontFamily: {
                heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
                body: ['var(--font-body)', 'system-ui', 'sans-serif'],
                sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
