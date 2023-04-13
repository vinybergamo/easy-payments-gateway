module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  collectCoverage: false,
  setupFiles: ["<rootDir>/tests/config.ts"],
  testMatch: ["**/tests/**/*.spec.ts"],
};
