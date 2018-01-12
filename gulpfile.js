var gulp = require('gulp'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream');

gulp.task('default', function () {
    return browserify('./source/app.js')
        .transform(babelify.configure({ presets: ["es2015", "react"] }))
        .bundle()
        .pipe(source('snapterest.js'))
        .pipe(gulp.dest('./build/'));
});	
