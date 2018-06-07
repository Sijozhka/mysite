'use strict';

module.exports = function(){
	$.gulp.task('imagemin', function(){
		return $.gulp.src('./src/img/*.{png,jpg,jpeg,gif,svg}')
  		.pipe($.gp.imagemin())
  		.pipe($.gulp.dest('./build/assets/img'))
		});

	
};