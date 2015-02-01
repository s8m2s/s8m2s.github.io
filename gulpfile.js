var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	jshint = require('gulp-jshint'),
	autoprefixer = require('gulp-autoprefixer'),
	spawn = require('child_process').spawn;

gulp.task('lint', function(){

	gulp.src(['javascripts/*.js','!javascripts/*.min.js'])
	.pipe(jshint());

});

gulp.task('min', function(){

	gulp.src(['javascripts/**/*.js','!javascripts/**/*.min.js'])
	.pipe(uglify())
	.pipe(rename({suffix:'.min'}))
	.pipe(gulp.dest('javascripts'));

});

gulp.task('jekyll', function(gulpCallBack){
	var jekyll = spawn('jekyll', ['serve', '--config', '_config.yml','--trace'], {stdio: 'inherit'});
	jekyll.on('exit', gulpCallBack);
});

gulp.task('watch', function(){
	gulp.watch(['javascripts/**/*.js','!javascripts/**/*.min.js'], ['min']);
});

gulp.task('default', ['lint','min']);

gulp.task('serve', ['watch','jekyll']);

gulp.task('build', ['lint','min','jekyll']);