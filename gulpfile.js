var gulp = require('gulp');
var jshint = require('gulp-jshint');
var livereload = require('gulp-livereload');

var htmlDir = '*.html';
var jsDir = '*.js';
var cssDir = '*.css';

gulp.task('lint', function() {
	return gulp.src('*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('default', ['lint'], function() {
	livereload.listen();
	gulp.watch(htmlDir, function() {
		gulp.src(htmlDir).pipe(livereload());
	});
	gulp.watch(jsDir, function() {
		gulp.src(jsDir).pipe(livereload());
	});
	gulp.watch(cssDir, function() {
		gulp.src(cssDir).pipe(livereload());
	});
});