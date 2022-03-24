module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{vue,js}",
	],
	theme: {
		fontFamily: {
			montserrat: ['Montserrat', 'sans-serif'],
			helvetica: ['HelveticaNeueCry', 'sans-serif'],
		},
    colors:{
      primary:{
        DEFAULT: '#D9D2E8', // 4
        4: '#D9D2E8',
        9: '#563188',
      },
      gray: {
        DEFAULT: '#EDEDEE', // 3
        3: '#EDEDEE',
      },
      white: 'white',
      black: 'black',
    },
		boxShadow:{
			DEFAULT: '0px 10px 50px rgba(1, 1, 1, 0.2)', // dark
			dark: '0px 10px 50px rgba(1, 1, 1, 0.2)',
			light: '0px 10px 50px rgba(86, 49, 136, 0.2)',
		},
		extend: {},
	},
	plugins: [],
}
