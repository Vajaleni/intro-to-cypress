const { defineConfig } = require("cypress");
const webpackConfig = require("./webpack.config.js"); 

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    
    reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('file:preprocessor', require('@cypress/webpack-preprocessor')(webpackConfig));
      config.env.BASE_URL = process.env.BASE_URL || config.env.BASE_URL || "https://www.saucedemo.com";
      return config;
      
    },
    env: {
      BASE_URL: "https://www.saucedemo.com",
      User_NAME: "standart_user",
      USER_PASSWORD:"secret_sause"
    }
  }
});

