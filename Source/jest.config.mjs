export default {
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'json'],
  rootDir: './',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$',
  coverageDirectory: './coverage',
  collectCoverageFrom: ['**/*.{js,jsx}', '!**/node_modules/**', '!**/vendor/**'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  }
};
