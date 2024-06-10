module.exports = {
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest",
    },
    testEnvironment: "node",
    moduleFileExtensions: ["js", "jsx"],
    transformIgnorePatterns: [
      "node_modules/(?!@babel/runtime)"
    ],
    moduleNameMapper: {
      "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/jest.fileMock.js"
    },
    testMatch: ["<rootDir>/backend/__tests__/**/*.test.js"],
  };
  