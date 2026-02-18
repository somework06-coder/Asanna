/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./js/**/*.js"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#A0724F",
                "cta": "#5A260B",
                "background-light": "#F4EFE7",
                "background-dark": "#32160A",
                "surface-dark": "#3E2B22",
                "forest": "#5A260B",
                "sand": "#F4EFE7",
            },
            fontFamily: {
                "display": ["Manrope", "sans-serif"]
            },
            backgroundImage: {
                'hero-pattern': "linear-gradient(to bottom, rgba(16, 34, 16, 0.4), rgba(16, 34, 16, 0.6))",
            },
            keyframes: {
                shimmer: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' },
                }
            },
            animation: {
                shimmer: 'shimmer 3s infinite',
            }
        },
    },
    plugins: [],
}
