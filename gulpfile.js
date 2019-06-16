var gulp = require('gulp');
var pug = require('gulp-pug');

gulp.task('pug', () => {
  return gulp.src(['./pug/**/*.pug', '!./pug/**/_*.pug'])
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./html'));
});

gulp.task('sass:watch', function() {
  var watcher = gulp.watch('./pug/**/*.pug', gulp.task('pug'));
  watcher.on('change', function(event) {
  });
});

// タスク"task-watch"がgulpと入力しただけでdefaultで実行されるようになる
gulp.task('default', gulp.series('sass:watch'));