// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,

  preset: 'ts-jest',

  globals: {
    'ts-jest': {
      diagnostics: false
    },
  },

  moduleFileExtensions: [
    "js",
    "json",
    "jsx",
    "ts",
    "tsx",
    "node"
  ],

  testEnvironment: "node",

  testMatch: [
    "**/test/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],

  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/src/$1"
  }
};
