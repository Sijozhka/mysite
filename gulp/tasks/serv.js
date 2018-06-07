'use strict';

module.exports = function(){
	$.gulp.task('serv', function(){
		$.browserSync.init({
			open: true,
			server: './build'
		});
		$.browserSync.watch('build', $.browserSync.reload);
	});
};	
		

	