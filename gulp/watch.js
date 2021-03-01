var gulp = require('gulp');

gulp.task('watch', gulp.series('sass', (done) => {
  gulp.watch(['./src/styles/scss/**/*.scss'], (done) => {
    gulp.task('sass')();
    done();
  });
  done();
}));
