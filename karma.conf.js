// Karma configuration
// Generated on Wed Jan 06 2021 13:49:06 GMT+0700 (GMT+07:00)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', "karma-typescript"],


    // list of files / patterns to load in the browser
    files: [
      'helpers/**/*.ts',
      'factories/**/*.ts',
      'rules/**/*.ts',
      'test-scenario/**/*.ts'
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      "**/*.ts": ["karma-typescript", 'coverage'] // *.tsx for React Jsx
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,

    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['ChromeNoSandbox'],
    customLaunchers: {
      ChromeNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox'],
      },
    },


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    karmaTypescriptConfig: {
      tsconfig: "./tsconfig.json",
      coverageOptions: {
        instrumentation: false
      }
    },

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
