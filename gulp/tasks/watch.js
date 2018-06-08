'use strict';

module.exports = function(){
	$.gulp.task('watch', function(){
		$.gulp.watch('./src/precss/*.less', $.gulp.series('less'));
		$.gulp.watch('./src/css/*.css', $.gulp.series('css'));
		$.gulp.watch('./src/js/*.js', $.gulp.series('js'));
		$.gulp.watch('./src/*.html',$.gulp.series('html'));
	});
};	
		