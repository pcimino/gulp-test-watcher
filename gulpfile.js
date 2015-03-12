'use strict';

/**
 * gulpfile.js : Where the magic begins
 * 
 * Loads the Gulp plugins
 * Loads the configuration which contains project properties and loads other task files
 * Provides entry point into the tasks
 */

//Setup gulp
var gulp = require('gulp');

//Setup runSequence
var runSequence = require('run-sequence').use(gulp);

//Configure the project settings/defaults
var configuration = require('./gulp/configuration');
var config = configuration(gulp, runSequence);

gulp.task('default', ['build-core']);
