/**
 * Created by Thomas on 2017-03-03.
 */
var gulp = require('gulp');

var concat = require('gulp-concat');

gulp.task('scripts', function() {
  return gulp.src('/dist/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('/dist/'));
});
