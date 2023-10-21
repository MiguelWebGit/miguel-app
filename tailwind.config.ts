import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class", 
    theme: {
        extend: {
            colors: {
                'primary-light': '#2874A6',
                'secondary-light': '#5499C7',
                'background-light': '#ECF0F1',
                'text-light': '#17202A',
                'primary-dark': '#5499C7',
                'secondary-dark': '#5DADE2',
                'background-dark': '#17202A',
                'text-dark': '#ECF0F1',
            },

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
