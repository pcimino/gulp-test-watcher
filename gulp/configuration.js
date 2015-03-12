/**
 * configure the build process
 */
module.exports = function(gulp, runSequence) {
    'use strict';

    var dollar = require('gulp-load-plugins')({
        pattern: ['gulp-*'],
        camelize: true, 
        lazy: true
    });
    var del = require('del');
    var pkg = require('../package.json');
    var SRC = 'src/';
    var TEST = 'test/';
    var NOT_SRC = '!src/';
    var specExt = 'Spec';

    var config = {
            $:dollar,
            pkg:pkg,
            del:del,
            SRC:SRC,
            TMP:'tmp',
            COVERAGE:'coverage',
            specExt:specExt,
            JS_TEST_SRC: [
                'src/**/*.js',
            ],
            JS_TESTS: [ 
                'test/jasmine/**/*' + specExt+ '.js'
            ],
            karmaTestFiles:[],
            karmaConfig:'test/karma.conf.js'
    };

    // load script files
    var cleanupTasks = require('./cleanup');
    var orchestratorTasks = require('./orchestrator');
    var unitTestTasks = require('./unit-tests');
    var watchTasks = require('./watch');

    //initialize script paths
    cleanupTasks(gulp, runSequence, config);
    orchestratorTasks(gulp, runSequence, config);
    unitTestTasks(gulp, runSequence, config);
    watchTasks(gulp, runSequence, config);


    return config;

};