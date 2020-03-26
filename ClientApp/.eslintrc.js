module.exports = {
	extends: "./eslint-config-base",
	parser: "babel-eslint",
	parserOptions: {
	  ecmaVersion: 6,
	  sourceType: "module",
	  ecmaFeatures: {
		"jsx": true,
		"arrowFunctions": true,
		"experimentalObjectRestSpread": true,
		"classProperties": true
	  }
	},
	plugins: []
  };
  