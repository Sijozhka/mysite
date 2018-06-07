'use strict';

module.exports = function() {
	$.gulp.task('js', function() {
	return $.gulp.src('./src/js/*.js')
			.pipe($.gulp.dest('./build/assets/js'))
		

	});
}
