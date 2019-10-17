// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
module.exports = {
  clearMocks: true,
  collectCoverageFrom: ['src/components/**/*.{js,jsx}'],
  coverageDirectory: '<rootDir>/test/__coverage__',
  moduleFileExtensions: ['js', 'jsx', 'json'],
  snapshotSerializers: [
    "enzyme-to-json/serializer"
  ],
  moduleNameMapper: {
    "^.+\\.(css|scss|png|jpg|jpeg|gif|svg|pdf)$": "babel-jest",
    "^components(.*)$": "<rootDir>/src/components$1",
    "^assets(.*)$": "<rootDir>/src/assets$1"
  },
  setupFiles: [
    '<rootDir>/test/enzyme.config.js',
    'jest-plugin-context/setup'
  ],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  testEnvironment: 'jsdom',
  testMatch: [
    '**/?(*.)+(spec|test).js?(x)'
  ],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/'
  ],
  verbose: false,
};
