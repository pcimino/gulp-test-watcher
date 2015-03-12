/**
 * watch.js is responsible for watching for changed files and rerunning the appropriate build step
 */
module.exports = function(gulp, runSequence, config) {
    'use strict';

    var fs = require('fs');

    // dummy callBack prevents emit error on too many callBacks
    var callBackHandler = function() {
    };

   gulp.task('watch-test', function(callBack) {
       
    // watch for test changes
       var fileList = [];
       fileList = fileList.concat(config.JS_TEST_SRC);
       fileList = fileList.concat(config.JS_TESTS);
       gulp.watch(fileList, function(changed, callBack) {
           addChangedFileToTestList(changed);
           console.log(JSON.stringify(changed, null, 2));
           runSequence('test', callBackHandler);
       });
   });
   
    /**
     * Helper method makes sure only tests run for changed files or matching Specs
     * 
     * This will only work if this filename convention is used:
     *     - [somefilename].js
     *     - [somefilename]Spec.js
     * Where somefilename is identical in value/case between the source and the test file
     * 
     * Also for this to work, the file and the associated spec need to be in the SAME path relative to the parent:
     *     These will work
     *         .../src
     */
    var addChangedFileToTestList = function(changed) {
        console.log('bbbbbbbbbbbbbbbbbbbbbb' + config.karmaTestFiles);
        if (changed.type === 'changed' && changed.path.indexOf('.js') > 0) {
            var fileTest = changed.path;

            console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAChanged files " + fileTest);

            // only want to test changed files
            // so find the JavaScript name and change it to Name*.js: IF the NameController.js changed, then the NAMEControllerSpec.js will run
            fileTest = fileTest.substring(0, fileTest.lastIndexOf('.js'));
            if (fileTest.lastIndexOf(config.specExt) > 0) {
                fileTest = fileTest.substring(0, fileTest.lastIndexOf(config.specExt));
            }
            
            // check for duplicates
            // this is really overkill because if karma sees two files ['MySpec_1.js', 'MySpec_1.js'] it'll only run the test once
            // in theory if a dev is running the watch continuously over a long time with the same changes the array will
            // blow up memory, but unlikely
            var filePattern = fileTest.replace('\\src\\', '\\test\\jasmine\\').replace('/src/', '/test/jasmine/') + config.specExt + '.js';
            // make sure the Spec file exists (i.e. myAppSpec.js doesn't exist
            if (fs.existsSync(filePattern)) {
                var addFlag = true;
                for (var i = 0; i < config.karmaTestFiles.length; i++) {
                    if (config.karmaTestFiles[i] === filePattern) {
                        addFlag = false;
                        break;
                    }
                }
                if (addFlag) {                
                    config.karmaTestFiles.push(filePattern);
                }
            } else {
                console.log('Test file DOES NOT EXIST ' + filePattern);
            }
        }
    };
};