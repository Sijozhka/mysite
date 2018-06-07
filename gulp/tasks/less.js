'use strict';

module.exports = function() {
	$.gulp.task('less', function() {
	return $.gulp.src('./src/precss/style.less')
	.pipe($.gp.sourcemaps.init())
		.pipe($.gp.less({
			paths: ['./src/precss/']
		}))
		.on('error',$.gp.notify.onError({
			title:'Style'
		}))
		.pipe($.gp.autoprefixer({
			browsers:['> 0.1%'],
			cascade: false
		}))
		.pipe($.gp.sourcemaps.write())
		.pipe($.gulp.dest('./build/assets/css'))
		

	});
}
