var gulp = require('gulp');
var jshint = require('gulp-jshint');
var livereload = require('gulp-livereload');

var dir = 'public/**/**/*.*';
var highlelDir = '*.js';
// var jsDir = '*.js';
// var cssDir = '*.css';

gulp.task('lint', function() {
	return gulp.src('public/javascripts/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch(dir, ['lint'], function() {
		gulp.src(dir).pipe(livereload());

	});
	gulp.watch(highlelDir, function() {
		gulp.src(highlelDir).pipe(livereload());
	});
	// gulp.watch(cssDir, function() {
	// 	gulp.src(cssDir).pipe(livereload());
	// });
});

gulp.task('default', ['lint', 'watch']);