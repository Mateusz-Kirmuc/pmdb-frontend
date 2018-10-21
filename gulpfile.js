var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('built:js', function () {
   return gulp.src([
       './js/_sidebar.js',
       './js/_table.js',
       './js/_side-menus.js'
       ])
       .pipe(concat('script.js'))
       .pipe(gulp.dest('./static/js/'));


});