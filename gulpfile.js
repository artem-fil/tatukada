var gulp = require('gulp');
    jade = require('gulp-jade');
    sass = require('gulp-sass');
    livereload = require('gulp-livereload');

gulp.task('sass',function() {
  return gulp.src('app/sass/**/*.sass')
    .pipe(sass({indentedSyntax: true}))
    .pipe(gulp.dest('public/css/'))
    .pipe(livereload());
})

gulp.task('jade',function() {
  return gulp.src('app/jade/index.jade')
    .pipe(jade({pretty:true}))
    .pipe(gulp.dest('public/'))
    .pipe(livereload());
})

gulp.task('watch',function() {
  livereload.listen();
  gulp.watch('app/sass/**/*.sass',['sass']);
  gulp.watch('app/jade/**/*.jade',['jade']);
})

gulp.task('default', ['jade','sass','watch']);
