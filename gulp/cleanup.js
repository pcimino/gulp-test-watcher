/**
 * cleanup.js is responsible for deleting build directories
 */
module.exports = function(gulp, runSequence, config) {
    'use strict';
    
    /** Clean up  */
    gulp.task('clean-coverage', function (done) {
        return config.del([config.TMP, config.COVERAGE], done);
      });
    /** End Cleanup */
 
};