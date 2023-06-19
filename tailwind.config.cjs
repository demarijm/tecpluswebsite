/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			maxWidth: {
				'8xl': '90rem',
			},
			colors: {
				'primary': '#2929E6',
				'secondary': '#EEFD40',
				'tertiary': '#F4F4F5',
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
