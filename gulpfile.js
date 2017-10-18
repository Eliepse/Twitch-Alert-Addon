var gulp = require('gulp');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var argv = require('yargs').argv;

var isProduction = (argv.production === undefined) ? false : true;

gulp.task('make', ['concat-js'], function() {

    return gulp.src([
        'src/**',
        '!src/background_scripts/**'
    ])
    .pipe(gulp.dest('./addon/'));

});

gulp.task('concat-js', function() {

    var src = [];

    src.push('src/assets/js/reqwest.js')

    if(isProduction)
        src.push('src/config.js')
    else
        src.push('src/config.dev.js')

    src.push('src/background_scripts/main.js')
    src.push('src/background_scripts/browser-action-icon.js')
    src.push('src/background_scripts/request.js')

    return gulp.src(src)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./addon/background_scripts/'))

});

gulp.task('watch', ['make'], function() {

    return watch('./src/**/*.js', ['make']);

})
