const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
// compile scss into css
function style() {
    // 1. where is my scss file
    return gulp.src('./sass/**/*.sass')
    // 2. pass that file through sass compiler
    .pipe(sass()).on('error', sass.logError)
    .pipe(autoprefixer())
    // 3. where do I save the compiled CSS?
    .pipe(gulp.dest('./css'))
    // 4. stream changes to all browsers
    .pipe(browserSync.stream())
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./sass/**/*.sass', style)
    gulp.watch('./*.html').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;

gulp.task('default', watch);