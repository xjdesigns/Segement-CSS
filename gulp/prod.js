const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const rename = require('gulp-rename')
const version = process.env.npm_package_version || '0.0.0-beta'

gulp.task('prod', function() {
  return gulp.src('./src/styles/scss/style.{sass,scss}')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer())
    .pipe(rename(generateFileName()))
    .pipe(gulp.dest(`./SEGMENT/${version}`))
})

gulp.task('prod:beta', function() {
  return gulp.src('./src/styles/scss/style.{sass,scss}')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(rename(generateFileName(true)))
    .pipe(gulp.dest(`./SEGMENT/${version}`))
})

function generateFileName (isBeta = false) {
  return isBeta ? `segment.${version}-beta.min.css` : `segment.${version}.min.css`
}
