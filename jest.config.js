const reporters = ['default'];

if (process.env.NODE_ENV === 'test') {
  reporters.push('jest-junit');
}

module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.test.json',
    },
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  preset: 'ts-jest',
  reporters,
  setupTestFrameworkScriptFile: '<rootDir>/jest.setup.ts',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testMatch: ['**/__tests__/*.+(ts|tsx)'],
  testURL: 'http://localhost/',
  timers: 'fake',
  verbose: true,
};
