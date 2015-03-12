/**
 * orchestrator.js links tasks in sequence
 */
module.exports = function(gulp, runSequence, config) {
    'use strict';

    // Build core
    gulp.task('build-core', function(callback) {
        runSequence('test', 'watch-test', callback);
    });

};