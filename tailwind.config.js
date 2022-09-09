module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			'roboto': ['Roboto'],
			'arvo': ['Arvo']
		},
		colors: {
			white: '#e2e2e2',
			black: '#2b2b2b',
			paper: '#CECBC1',
			blueLine: '#242bff',
			redLine: '#ff1212',
			purple: '#522B72',
			yellow: '#AAA639',
		},
		extend: {
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
