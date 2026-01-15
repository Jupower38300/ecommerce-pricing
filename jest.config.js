module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/*.spec.ts"],
  coverageDirectory: "build/logs",
  reporters: [
    "default",
    ["jest-junit", { outputDirectory: "build/logs", outputName: "junit.xml" }],
  ],
};
