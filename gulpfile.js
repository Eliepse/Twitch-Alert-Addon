var gulp = require('gulp');
var concat = require('gulp-concat');
var watch = require('gulp-watch');

gulp.task('make', ['concat-js'], function() {

    return gulp.src([
        'src/**',
        '!src/background_scripts/**'
    ])
    .pipe(gulp.dest('./addon/'));

});

gulp.task('concat-js', function() {

    return gulp.src([
        'src/assets/js/reqwest.js',
        'src/background_scripts/main.js',
        'src/background_scripts/request.js',
    ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./addon/background_scripts/'))

});

gulp.task('watch', ['make'], function() {

    return watch('src/**/*', ['make']);

})
