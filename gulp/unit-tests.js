/**
 * Responsible for running tests
 */
module.exports = function(gulp, runSequence, config) {
    'use strict';

    gulp.task('test', ['clean-coverage'], function() {
        var testFiles = [];
        testFiles = testFiles.concat(config.JS_TEST_SRC);

        // first time through run all tests, next time, only run the changed tests for changed files
        if (config.karmaTestFiles && config.karmaTestFiles.length > 0) {
            testFiles = testFiles.concat(config.karmaTestFiles);
        } else {
            testFiles = testFiles.concat(config.JS_TESTS);
        }

        console.log('testing ' + JSON.stringify(testFiles, null, 2));
        return gulp.src(testFiles)
          .pipe(config.$.karma({
            configFile: config.karmaConfig,
            singleRun: true
          }))
          .on('error', function(err) {
            // Make sure failed tests cause gulp to exit non-zero
            throw err;
          }).on('end', function() {
              // clean up the temp store
              config.karmaTestFiles = [];
          });
      });
};
