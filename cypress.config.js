const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: true,
   experimentalSessionAndOrigin: true,
   defaultCommandTimeout: 60000,
   viewportWidth: 1280,
   viewportHeight: 720,
  },
});