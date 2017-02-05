import gulp from 'gulp';
import connect from 'gulp-connect-php';
import browserSync from 'browser-sync';

gulp.task('connect-sync', () => {
  connect.server({
    port: 8001,
    base: './'
  }, () => {
    browserSync({
      proxy: 'localhost:8001'
    });
  });
});

gulp.task('reload', () => {
  browserSync.reload();
});

gulp.task('default', ['connect-sync'], () => {
  gulp.watch([
    './**/*.php',
    './**/*.css',
    './**/*.js',
    '!./node_modules/**/*'
  ], ['reload']);
});