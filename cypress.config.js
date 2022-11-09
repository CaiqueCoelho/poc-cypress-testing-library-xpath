const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://melhor-horario-banho.firebaseapp.com/',
    reporter: "../node_modules/mochawesome/src/mochawesome.js",
    video: false,
    screenshotOnRunFailure: false,
    reporterOptions: {
        overwrite: false,
        html: false,
        json: true,
        charts: true,
        reportPageTitle: "My Test Suite",
        embeddedScreenshots: true,
        inlineAssets: true,
    },
    screenshotsFolder: "TestReport/screenshots",
    videosFolder: "TestReport/videos"
  },
});
