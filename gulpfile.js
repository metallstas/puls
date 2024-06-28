

const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const sass = require('gulp-sass')(require('sass'))
const rename = require("gulp-rename")
const cleanCSS = require('gulp-clean-css')

//Static server
gulp.task('server', () => {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    })
})

//SASS
gulp.task('sass', () => {
    return gulp.src("src/sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({
            prefix: "",
            suffix: ".min",
          }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("src/css/"))
        .pipe(browserSync.stream())
})

gulp.task('watch', () => {
    gulp.watch("src/sass/**/*.+(scss|sass)", gulp.parallel("sass"))
    gulp.watch("src/*.html").on("change", browserSync.reload)
})

gulp.task('default', gulp.parallel('server', 'sass', 'watch'))
