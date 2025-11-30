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
                // Enhanced Green Scale (Primary - 60% usage)
                green: {
                    50: 'oklch(0.985 0.020 152)',
                    100: 'oklch(0.970 0.045 152)',
                    200: 'oklch(0.940 0.080 152)',
                    300: 'oklch(0.880 0.140 151)',
                    400: 'oklch(0.780 0.200 150)',
                    500: 'oklch(0.710 0.210 149.5)',
                    600: 'oklch(0.627 0.194 149.214)', // PRIMARY (unchanged)
                    700: 'oklch(0.540 0.165 150)',
                    800: 'oklch(0.450 0.125 151)',
                    900: 'oklch(0.360 0.095 152)',
                    950: 'oklch(0.250 0.060 153)',
                },
                // Purple/Magenta Accent Scale (10% usage)
                purple: {
                    50: 'oklch(0.985 0.020 310)',
                    100: 'oklch(0.965 0.045 310)',
                    200: 'oklch(0.930 0.085 310)',
                    300: 'oklch(0.870 0.145 308)',
                    400: 'oklch(0.750 0.200 306)',
                    500: 'oklch(0.650 0.210 304)',
                    600: 'oklch(0.570 0.195 302)', // ACCENT PRIMARY
                    700: 'oklch(0.490 0.160 300)',
                    800: 'oklch(0.410 0.120 298)',
                    900: 'oklch(0.340 0.090 296)',
                    950: 'oklch(0.260 0.055 294)',
                },
                // Refined Neutral Scale (30% usage)
                // Light mode: warm grays (270°), Dark mode: cool grays (264°)
                neutral: {
                    50: 'oklch(0.990 0.003 270)',
                    100: 'oklch(0.975 0.005 270)',
                    200: 'oklch(0.950 0.008 270)',
                    300: 'oklch(0.900 0.012 270)',
                    400: 'oklch(0.750 0.015 270)',
                    500: 'oklch(0.600 0.012 270)',
                    600: 'oklch(0.450 0.010 264)',
                    700: 'oklch(0.350 0.012 264)',
                    800: 'oklch(0.250 0.015 264)',
                    900: 'oklch(0.180 0.015 264)',
                    950: 'oklch(0.110 0.012 264)',
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
