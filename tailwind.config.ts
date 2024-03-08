import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
    corePlugins: {
        preflight: false,
    },
    prefix: 'tw-',
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue',
    ],
    theme: {
        fontFamily: {
            sans: ['Inter Variable', 'sans-serif'],
            heading: ['Inter Variable', 'sans-serif'],
            alt: ['Karla Variable', 'sans-serif'],
            mono: ['Fira Code Variable', ...defaultTheme.fontFamily.mono],
        },
        extend: {
            colors: {
                llion: '#002d89',
                primary: {
                    50: 'rgb(var(--color-primary-50) / <alpha-value>)',
                    100: 'rgb(var(--color-primary-100) / <alpha-value>)',
                    200: 'rgb(var(--color-primary-200) / <alpha-value>)',
                    300: 'rgb(var(--color-primary-300) / <alpha-value>)',
                    400: 'rgb(var(--color-primary-400) / <alpha-value>)',
                    500: 'rgb(var(--color-primary-500) / <alpha-value>)',
                    600: 'rgb(var(--color-primary-600) / <alpha-value>)',
                    700: 'rgb(var(--color-primary-700) / <alpha-value>)',
                    800: 'rgb(var(--color-primary-800) / <alpha-value>)',
                    900: 'rgb(var(--color-primary-900) / <alpha-value>)',
                    950: 'rgb(var(--color-primary-950) / <alpha-value>)',
                },
                muted: {
                    50: 'rgb(var(--color-muted-50) / <alpha-value>)',
                    100: 'rgb(var(--color-muted-100) / <alpha-value>)',
                    200: 'rgb(var(--color-muted-200) / <alpha-value>)',
                    300: 'rgb(var(--color-muted-300) / <alpha-value>)',
                    400: 'rgb(var(--color-muted-400) / <alpha-value>)',
                    500: 'rgb(var(--color-muted-500) / <alpha-value>)',
                    600: 'rgb(var(--color-muted-600) / <alpha-value>)',
                    700: 'rgb(var(--color-muted-700) / <alpha-value>)',
                    800: 'rgb(var(--color-muted-800) / <alpha-value>)',
                    900: 'rgb(var(--color-muted-900) / <alpha-value>)',
                    950: 'rgb(var(--color-muted-950) / <alpha-value>)',
                },
            },
        },
    },
    plugins: [],
} satisfies Config
