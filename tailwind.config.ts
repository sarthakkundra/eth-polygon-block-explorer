import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			primary: "#AD5E3D",
			primaryDark: "#72402c",
			secondary: "#55555B",
			black: "#151520",
			white: "#ffffff",
			transparent: "#RRGGBBAA",
			gray: "#9e9e9e",
			"gray-50": "#fafafa",
			"gray-100": "#f5f5f5",
			"gray-200": "#eeeeee",
			"gray-300": "#e0e0e0",
			"gray-400": "#bdbdbd",
			"gray-500": "#9e9e9e",
			"gray-600": "#757575",
			"gray-700": "#616161",
			"gray-800": "#424242",
			"gray-900": "#212121",
		},
		extend: {
			backgroundImage: {
				"gradient-radial":
					"radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
export default config;

// primary: "#AD5E3D",
// primaryDark: "#72402c",
// secondary: "#55555B",
