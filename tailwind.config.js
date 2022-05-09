const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
		"./pages/**/*.{js,jsx,ts,tsx}",
		"./components/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["VT323", "monospace"],
			},
		},
		colors: {
			mario: {
				mainRed: "#ff0000",
			},
		},
	},
	plugins: [require("tailwindcss"), require("postcss-preset-env")],
};

//
