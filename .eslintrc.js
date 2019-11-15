module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	}
	// extends: [
	// 	'eslint:recommended',
	// 	'plugin:react/recommended',
	// 	'plugin:@typescript-eslint/recommended',
	// 	'prettier/@typescript-eslint',
	// 	'plugin:prettier/recommended'
	// ],
	// rules: {
	// 	'prettier/prettier': [ 'error' ]
	// },
	// plugins: [ 'react', '@typescript-eslint', 'prettier' ]
};
