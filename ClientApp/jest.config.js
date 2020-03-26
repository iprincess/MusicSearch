module.exports = {
    moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
    transform: {
      '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
      '^.+\\.(js|jsx)?$': 'babel-jest',
      '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    moduleNameMapper: {
      "\\.(css|less)$": "identity-obj-proxy",
      '^@/(.*)$': '<rootDir>/src/$1'
    },
    snapshotSerializers: ['enzyme-to-json/serializer'],
    testPathIgnorePatterns: ['<rootDir>/bin/'],
    testRegex: [
      '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
    ],
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
  
    collectCoverage: false,
    coverageDirectory: '<rootDir>/test_output',
    coveragePathIgnorePatterns: [
      '<rootDir>/node_modules/', 
      '<rootDir>/.storybook/', 
      '(\\.|/)(test|spec|stories)\\.[jt]sx?$'
    ]
  };