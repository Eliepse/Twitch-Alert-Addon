var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require("gulp-rename");
var watch = require('gulp-watch');
var argv = require('yargs').argv;

var isProduction = (argv.production === undefined) ? false : true;

gulp.task('make', ['concat-js'], function() {

    if(isProduction) {
        var m = gulp.src('src/manifest.json')
    } else {
        var m = gulp.src('src/manifest.dev.json')
    }

    m.pipe(rename('manifest.json'))
    m.pipe(gulp.dest('addon/'))

    return gulp.src([
        'src/**',
        '!src/background_scripts/**',
        '!src/manifest.*',
        '!src/config.*'
    ])
    .pipe(gulp.dest('./addon/'));

});

gulp.task('concat-js', function() {

    var src = [];

    src.push('src/assets/js/reqwest.js')

    if(isProduction) {
        src.push('src/config.js')
    } else {
        src.push('src/config.dev.js')
    }

    src.push('src/background_scripts/*.js')

    return gulp.src(src)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./addon/background_scripts/'))

});

gulp.task('watch', ['make'], function() {

    return watch('./src/**/*', function() {
        gulp.start('make');
    });

})
