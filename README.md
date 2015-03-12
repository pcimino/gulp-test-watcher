# gulp-test-watcher
Contrary to the name, this is not a gulp plugin module.

Demo showing re-run only the necessary Karma tests.

This project is to demonstrate one aspect of using gulp for testing.

# Organization
## Project   
The gulpfile is broken up in to modules to help separate concerns. 

The orchestrator.js exists because I normally have many more modules/tasks.

The configuration.js can get pretty big and messy for large projects but it does allow me to keep everything in one place and I can set things up for new projects pretty easily. My full template has modules for bower, JavaScript linting and concatenation, protractor tests, html minification, image minification, styles processing (SASS & CSS) and revisoning (cache busting).

## Naming Conventions
Lower Camel Case. If you use some other convention you'll need to update the watcher script and the configuration specExt property.

## Tests   
Source and tests need to follow a naming and location convention. You might need some additional filtering if you like to put things in the same directory:
- /src/.../myFile.js
- /src/.../myFileSpec.js

This project follows this convention
- /src/.../myFile.js
- /test/jasmine/.../myFileSpec.js
  
# Watcher
The test task is fairly straightforward. The watcher task (watch-test) receives the list of changed files, which then get passed to a filter that either figures out what test file gets added to the list. Changes to myFile.js or myFileSpec.js results in myFile.spec.js getting added to the list.

## Run It
- npm install
- gulp

Modify each of the scripts or both and you'll see only the corresponding Spec test run. Similarly, modify the Spec files singly or simultaneously.