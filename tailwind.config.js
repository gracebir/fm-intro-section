/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Epilogue", "sans-serif"],
            },
            colors: {
                "almost-white": "var(--almost-white)",
                "medium-gray": "var(--medium-gray)",
                "almost-black": "var(--almost-black)",
            },
        },
    },
    variants: {
        display: ["group-hover"],
    },
    plugins: [],
};
