require("dotenv").config({ path: ".env" });
module.exports = {
  injectGlobals: true,
  testEnvironment: "node",
  testMatch: ["**/tests/**/*.js?(x)"],
};
