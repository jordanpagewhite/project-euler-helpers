module.exports = {
  "extends": ["eslint:recommended", "google"],
  "env": {
    "browser": true,
    "mocha": true,
    "node": true,
  },
  "rules": {
    "semi": ["error", "never"]
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
  }
};
