module.exports = {
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testMatch: ["<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "\\.(css|sass|scss)$": "identity-obj-proxy",
  },
};
