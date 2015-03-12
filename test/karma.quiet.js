var sharedConfig = require('./karma-shared.conf');

module.exports = function(config) {
    'use strict';
    sharedConfig(config, {testName: 'Build tests', logFile: 'karma-docs.log'}, ['PhantomJS']);

    config.set({
        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,
        reporters: ['dots'],

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true
    });

};
