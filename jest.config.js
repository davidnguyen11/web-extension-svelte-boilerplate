const ignores = ['/node_modules/', '__mocks__'];

module.exports = {
  testMatch: ['**/__test/**/*.spec.+(ts|tsx|js)'],
  testPathIgnorePatterns: [...ignores],
  coveragePathIgnorePatterns: [...ignores, 'src/(umd|cjs|esm)-entry.js$'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  coverageDirectory: './coverage',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 100,
      lines: 100,
      statements: 100,
    },
    "./src/components/**/*.svelte": { // *.svelte test coverage always results 0 percent for "Branch"
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'svelte'],
  transform: {
    '^.+\\.svelte$': [
      "svelte-jester",
      {
        "preprocess": true
      }
    ],
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
  },
  verbose: true,
  setupFilesAfterEnv: ['./jest.setup.js']
};