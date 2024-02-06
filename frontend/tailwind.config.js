/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'./node_modules/tw-elements-react/dist/js/**/*.js',
	],
	theme: {
		extend: {
			colors: {
				primary: '#202C36',
				primaryBlack: '#2B3844',
				primaryLight: '#E9EDF4',
				primaryRed: '#F27851',
				likesColor: 'rgba(242, 120, 81, 0.50)',
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
			},
			boxShadow: {
				search: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
			},
			width: {
				1170: '1170px',
				550: '550px',
			},
			spacing: {
				90: '90px',
				100: '100px',
			},
		},

		screens: {
			xs: '480px',
			ss: '620px',
			sm: '768px',
			md: '1060px',
			lg: '1200px',
			lx: '1440px',
			xl: '1700px',
		},
	},
	plugins: [require('tw-elements-react/dist/plugin.cjs')],
}
