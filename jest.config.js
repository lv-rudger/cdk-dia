module.exports = {
    testMatch: [
        '<rootDir>/src/**/tests/**/*.test.ts',
    ],
    testPathIgnorePatterns: [
        "/node_modules/",
    ],
    reporters: ["default"],
    globalSetup: "./testSetup.js",
    testEnvironment: "node"
}