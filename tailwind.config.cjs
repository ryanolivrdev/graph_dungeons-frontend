/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontSize: {
			xs: 14,
			sm: 16,
			md: 18,
			lg: 20,
			xl: 24,
			"2xl": 32,
		},

		colors: {
			transparent: "transparent",

			black: "#000",
			white: "#FFF",

			// Primary
			green: {
				900: "#2A9F85",
				800: "#3FA991",
				700: "#55B29D",
				600: "#6ABCAA",
				500: "#7FC5B6",
				400: "#94CFC2",
				200: "#AAD9CE",
				100: "#BFE2DA",
			},

			// Gray
			gray: {
				900: "#464646",
				800: "#A3A3A3",
				400: "#ECECEC",
				200: "#c4c4cc",
				100: "#F6F6F6",
			},

			// Secondary
			yellow: {
				900: "#FCAC1F",
				400: "#FDCD79",
				300: "#FEDEA5",
				100: "#FEEED2",
			},

			// Tertiary
			pink: {
				900: "#F45CFF",
				400: "#F89DFF",
				300: "#FBBEFF",
				100: "#FEEFFF",
			},

			// Error
			red: {
				600: "#FF7070",
			},
		},
		extend: {
			fontFamily: {
				sans: "Montserrat, sans-serif",
			},
		},
	},
	plugins: [],
};
