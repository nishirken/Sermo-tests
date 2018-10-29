module.exports = {
  preset: "jest-puppeteer",
  testMatch: [
    '<rootDir>/tests/**/*.ts'
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
   moduleFileExtensions: [
    'ts',
    'js',
    'jsx',
    'tsx',
    'json'
  ],
  setupTestFrameworkScriptFile: '<rootDir>/jest.setup.js',
}
