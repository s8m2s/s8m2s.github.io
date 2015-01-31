var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename');

gulp.task('min', function(){
	
	// var minfilter = filter(['**','!javascripts/min'])

	gulp.src(['javascripts/**/*.js','!javascripts/**/*.min.js'])
	.pipe(uglify())
	.pipe(rename({suffix:'.min'}))
	.pipe(gulp.dest('javascripts'));

});