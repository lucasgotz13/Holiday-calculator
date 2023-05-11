/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                MentorPurple: "hsl(259, 100%, 65%)",
                MentorLightRed: "hsl(0, 100%, 67%)",
                MentorWhite: "hsl(0, 0%, 100%)",
                MentorOffWhite: "hsl(0, 0%, 94%)",
                MentorLightGrey: "hsl(0,0%, 86%)",
                MentorSmokeyGrey: "hsl(0, 1%, 44%)",
                MentorOffBlack: "hsl(0, 0%, 8%)",
            },
            fontFamily: {
                Poppins: ["Poppins", "sans-serif"],
            },
            fontSize: {
                inputSize: "36px",
            },
        },
    },
    plugins: [],
};
