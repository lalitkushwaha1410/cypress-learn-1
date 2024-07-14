const { defineConfig } = require("cypress");

module.exports = defineConfig({
  experimentalInteractiveRunEvents: true,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mochawesome',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/reports/',
      quite: true,
      overwrite: true,
      html: true,
      json: false,
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
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
