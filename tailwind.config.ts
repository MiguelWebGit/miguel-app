import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class", // This enables dark mode.
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            // Add other styles as needed.
        },
    },
    variants: {
        extend: {
            backgroundColor: ["dark"], // This enables the 'dark' variant for background color.
            textColor: ["dark"], // This enables the 'dark' variant for text color.
            // Add other styles as needed.
        },
    },
    plugins: [],
};

export default config;
