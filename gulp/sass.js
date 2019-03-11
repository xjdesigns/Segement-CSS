var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var size = require('gulp-size');
var _ = require('lodash');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var path = require('path');

var plumberSettings = {
  errorHandler: notify.onError({
    title: 'Sass Error',
    icon: path.join(__dirname, '../assets/sass.png'),
    message: '<%= error.message %>'
  })
};

gulp.task('sass', function () {
  var settings = _.extend({
    imagePath: '/images' // Used by the image-url helper
  }, {
    outputStyle: 'compressed'
  });

  return gulp.src('./src/styles/scss/**/*.{sass,scss}')
    .pipe(plumber(plumberSettings))
    .pipe(sass(settings))
    .pipe(autoprefixer())
    .pipe(size({
      showFiles: true
    }))
    .pipe(gulp.dest('./src/styles/css'))
});

gulp.task('prod', function() {
  return gulp.src('./src/styles/scss/style.{sass,scss}')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./SIXPIXELS'))
});
