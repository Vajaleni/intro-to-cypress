const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // Используем значение переменной окружения из командной строки, если оно задано
      config.env.BASE_URL = process.env.BASE_URL || config.env.BASE_URL || "https://www.saucedemo.com/";
      return config;
    },
    env: {
      BASE_URL: "https://www.saucedemo.com/"
    }
  },
});