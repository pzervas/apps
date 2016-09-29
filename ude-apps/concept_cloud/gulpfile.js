var gulp = require('gulp');
var gutil = require('gulp-util');
var plumber = require('gulp-plumber');
var preprocessFile = require('preprocess').preprocessFile;
var readFile = require('fs').readFile;

var MAIN_FILE = 'index.html';
var GADGET_TEMPLATE = 'gadget_template.xml';
var GADGET_OUTPUT = 'gadget.xml';

// Inserting contents from `MAIN_FILE` into `GADGET_TEMPLATE`, saving as new
// file `GADGET_OUTPUT`
gulp.task('compile-gadget', function(cb) {
    readFile(MAIN_FILE, function(err, appHtml) {
        if (err) return cb(err);
        preprocessFile(GADGET_TEMPLATE, GADGET_OUTPUT, { content: appHtml }, cb);
    });
});

gulp.task('watch', ['compile-gadget'], function() {
    gulp.watch(MAIN_FILE, ['compile-gadget']);
});

gulp.task('default', ['compile-gadget']);

// same as `gulp.src` but all stream errors are handled by `logError` by default
function src() {
    return gulp.src.apply(gulp, arguments).pipe(plumber({
        errorHandler: logError
    }));
}

function logError(e) {
    gutil.beep();
    gutil.log(e.toString());
}
