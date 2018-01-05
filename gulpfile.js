var gulp = require('gulp'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream');

gulp.task('default', function () {
    return browserify('./source/app.js')
        .transform(babelify)
        .bundle()
        .pipe(source('snapterest.js'))
        .pipe(gulp.dest('./build/'));
});	
