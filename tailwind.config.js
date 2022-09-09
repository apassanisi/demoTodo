module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		colors: {
			white: '#ffffff',
			black: '#000000',
		},
		extend: {
			animation: {
				'redPlanet': 'rotateRedPlanet linear infinite 6s',
				'bluePlanet': 'rotateBluePlanet linear infinite 40s',
				'greenPlanet': 'rotateGreenPlanet linear infinite 16s',
				'wave': 'waveHand linear infinite 2.4s',
			},
			screens: {
				375: '375px',
				640: '640px',
				1024: '1024px',
				1440: '1440px',
			},
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@ky-is/tailwindcss-plugin-width-height')({ variants: ['responsive'] }),
	],
};
