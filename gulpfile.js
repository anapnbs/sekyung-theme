const gulp = require('gulp');
const imagemin = require('gulp-imageMin');

// Optimize Images
gulp.task('imageMin', () =>
	gulp.src(['img/*', 'img/*/*', 'node_modules/lightbox2/dist/images/*'])
		.pipe(imagemin())
		.pipe(gulp.dest('img'))
);

// Move CSS
gulp.task('styles', function () {
	gulp.src(['node_modules/animate.css/animate.min.css', 'node_modules/bootstrap/dist/css/bootstrap.min.css', 'node_modules/lightbox2/dist/css/lightbox.min.css'])
		.pipe(gulp.dest('css'))
});

// Default
gulp.task('default', ['imageMin', 'styles']);
