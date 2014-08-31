var gulp = require('gulp'),
  less = require('gulp-less'),
  connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});

gulp.task('less', function () {
  gulp.src('./src/main.less')
    .pipe(less())
    .pipe(gulp.dest('./dist'))
    .pipe(gulp.dest('./app'));
});

gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});

gulp.task('css', function() {
  gulp.src('./dist/*.css')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
  gulp.watch(['./src/*.less'], ['less']);
  gulp.watch(['./dist/*.css'], ['css']);
});


gulp.task('default', ['connect', 'less', 'watch']);