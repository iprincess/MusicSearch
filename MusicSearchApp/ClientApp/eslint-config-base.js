// https://eslint.org/docs/developer-guide/shareable-configs
// https://eslint.org/docs/rules/
// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    extends: [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    env: {
        "browser": true,
        "es6": true
    },
    globals: {
        "Promise": "readonly"
    },
    rules: {
        "prefer-const": "off",
        "react/prop-types": [2, {skipUndeclared: true}]
    },
    settings: {
        react: {
            version: "detect"
        }
    }
};


