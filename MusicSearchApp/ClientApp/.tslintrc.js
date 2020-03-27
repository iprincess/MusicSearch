module.exports = {
	extends: [
	  "./eslint-config-base",
	  "plugin:@typescript-eslint/recommended"
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
	  jsx: true,
	  project: "./tsconfig.json"
	},
	plugins: [
	  "@typescript-eslint"
	],
	rules: {
	  "@typescript-eslint/type-annotation-spacing": "off",
	  "@typescript-eslint/explicit-function-return-type": "off",
	  "@typescript-eslint/no-explicit-any": "off",
	  "prefer-const": "off"
	}
  };
  