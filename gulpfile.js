var gulp = require('gulp');

gulp.task('img', function() {
  gulp.src(['./images/**/*']).pipe(gulp.dest('./../APP/public/images'));

});


gulp.task('default', function() {

  gulp.watch('./images/**/*', ['img']);


});
