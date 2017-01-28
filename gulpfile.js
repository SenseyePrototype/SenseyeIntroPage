var gulp = require('gulp'),
    concat = require('gulp-concat'),
    concatCss = require('gulp-concat-css'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    eol = require('gulp-eol');

gulp.task('default', function() {
});

/*** MAIN ***/
gulp.task('main', function () {
    return gulp.src(['sass/main.sass'])
        .pipe(sass())
        .pipe(concatCss('main.css'))
        .pipe(eol('\n'))
        .pipe(gulp.dest('css/'));
});

/*** LIST ***/
gulp.task('list', function () {
    return gulp.src(['sass/list.sass'])
        .pipe(sass())
        .pipe(concatCss('list.css'))
        .pipe(eol('\n'))
        .pipe(gulp.dest('css/'));
});

/*** PROFILE ***/
gulp.task('profile', function () {
    return gulp.src(['sass/profile.sass'])
        .pipe(sass())
        .pipe(concatCss('profile.css'))
        .pipe(eol('\n'))
        .pipe(gulp.dest('css/'));
});


/*** BUILD ***/
gulp.task('build', ['list', 'main', 'profile'], function () {
    return gulp.src(['css/main.css', 'css/list.css'])
        .pipe(concatCss('build.min.css'))
        .pipe(cleanCSS())
        .pipe(minifyCss())
        .pipe(eol('\n'))
        .pipe(gulp.dest('css/'));
});

/*** WATCH ***/
gulp.task('watch', function () {
    gulp.watch('sass/**/*.sass', ['main', 'list', 'profile']);
});