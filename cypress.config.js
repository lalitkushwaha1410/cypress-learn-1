const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalStudio:true,
    projectId: "v4jctu",
    defaultCommandTimeout: 8000,
    //baseUrl:'https://www.saucedemo.com/',
    video : true,
    videoCompression : 32,
    screenshotOnRunFailure : true,
    //videosFolder : 'cypress\videos',
    setupNodeEvents(on, config) {
      // implement node event listeners here

      const appURL = config.env.type || 'live';

      const allURLs = {
        local : 'https://localhost:8000',
        staging :'https://www.staging.saucedemo.com/',
        systest : 'https://www.systest.saucedemo.com/',
        performance : 'https://www.performance.saucedemo.com/',
        integration : 'https://www.integration.saucedemo.com/',
        live : 'https://www.saucedemo.com/',
      }

      config.baseUrl = allURLs[appURL];
      return config;

    },
  },
});
