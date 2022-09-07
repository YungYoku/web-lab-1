// eslint-disable-next-line no-undef
module.exports = {
    parserOptions: {
        parser: "@babel/eslint-parser",
        "sourceType": "module",
        requireConfigFile: false,
        "ecmaVersion": "latest"
    },

    extends: [
        "eslint:recommended",
    ],

    env: {
        browser: true,
        node: true,
        commonjs: true
    },

    rules: {
        strict: 0,
        semi: ["error", "always"],
        "prefer-const": "error",
        quotes: ["error", "double", { allowTemplateLiterals: true }],
        "object-curly-spacing": ["warn", "always"],
        "keyword-spacing": "warn"
    },
};
