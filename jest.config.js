module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/"],
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverageFrom: [
    "**/src/**",
    "!**/tests/**.{js,ts}",
    "!**/node_modules/**",
    "!**/dist/**",
  ],
  automock: false,
};
