// Karma configuration
// Generated on Sun Nov 26 2017 12:48:45 GMT+0000 (GMT)

const { TRAVIS } = process.env;
process.env.CHROME_BIN = require('puppeteer').executablePath()

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '', // relative to __dirname

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      { pattern: 'components/rangePicker/test.js', type: 'module', included: true, served: true },
      { pattern: '**/*.js', type: 'module', included: false, served: true },
      { pattern: '**/*.css', type: 'css', included: true, served: true },
      { pattern: '**/*.svg', included: false, served: true },
    ],


    // list of files to exclude
    exclude: [
      '*module/*task/modules/**',
      '**/webpack.config.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    // reporters: [TRAVIS ? 'json' : 'dots'], // progress
    reporters: ['dots'], // progress

    jsonReporter: {
      stdout: true,
      // outputFile: 'results/results.json' // defaults to none
    },


    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: false,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    // logLevel: config.LOG_DEBUG,
    logLevel: config.LOG_DISABLE,

    browserConsoleLogOptions: {
      terminal: false
    },


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // browsers: ['Chrome'],
    browsers: ['ChromeNoHead'],

    customLaunchers: {
      ChromeNoHead: {
        base: 'ChromeHeadless',
        flags: [
          '--lang=ru'
        ]
      }
    },


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
}
