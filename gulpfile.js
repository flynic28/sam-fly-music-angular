/* File: gulpfile.js */

// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    fileList = require('gulp-file-list-saver');

gulp.task('create-index', function() {
    return gulp
     .src(['src/assets/images/gallery/*.jpg', 'src/assets/images/gallery/*.png'])
     .pipe(fileList('src', 'src/assets/images/gallery/images.json'))
    });
    