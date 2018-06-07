'use strict';

module.exports = function() {
	$.gulp.task('css', function() {
	return $.gulp.src('./src/css/*.css')
			.pipe($.gulp.dest('./build/assets/css'))
		

	});
}