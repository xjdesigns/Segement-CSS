const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const size = require('gulp-size')
const _ = require('lodash')
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const path = require('path')

var plumberSettings = {
  errorHandler: notify.onError({
    title: 'Sass Error',
    icon: path.join(__dirname, '../assets/sass.png'),
    message: '<%= error.message %>'
  })
}

gulp.task('sass', function () {
  const settings = _.extend({
    imagePath: '/images' // Used by the image-url helper
  }, {
    outputStyle: 'compressed'
  })

  console.warn('sass running')

  return gulp.src('./src/styles/scss/**/*.{sass,scss}')
    .pipe(plumber(plumberSettings))
    .pipe(sass(settings))
    .pipe(autoprefixer())
    .pipe(size({
      showFiles: true
    }))
    .pipe(gulp.dest('./src/styles/css'))
})
