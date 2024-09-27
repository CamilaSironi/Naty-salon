module.exports = {
    "extends": ["react-app"],
    "overrides": [
      {
        "files": ["**/*.js?(x)"],
        "rules": {
          "no-alert": "off",
          "react/no-unescaped-entities": "off",
          "react/display-name": "off",
          "react/prop-types": "off",
        }
      }
    ]
  }