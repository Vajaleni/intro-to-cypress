const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    env: {
      BASE_URL: "https://www.saucedemo.com/"
    },
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // Add your Node event listeners here if needed
    },
  },
});