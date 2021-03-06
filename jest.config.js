module.exports = {
  testEnvironment: 'jsdom',
  testPathignorePatterns: ['/node_modules/', '/.next'],
  collecCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
};
