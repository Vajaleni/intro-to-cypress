const { defineConfig } = require("cypress");
const webpackConfig = require("./webpack.config.js"); 

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      on('file:preprocessor', require('@cypress/webpack-preprocessor')(webpackConfig));
     
      config.env.BASE_URL = process.env.BASE_URL || config.env.BASE_URL || "https://www.saucedemo.com";
      return config;
    },
    env: {
      BASE_URL: "https://www.saucedemo.com"
    }
  }
});

