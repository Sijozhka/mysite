'use strict';

global.$ = {
	path: {
		task: require('./gulp/paths/tasks.js')
	},
	 gulp :require('gulp'),
	 del: require('del'),
	
	 gp : require("gulp-load-plugins")(),
	 browserSync: require('browser-sync').create(),

};


$.path.task.forEach(function(taskPath){
	require(taskPath)();
});

$.gulp.task('default',$.gulp.series(
	'clean','less','css','html','js','imagemin',
	$.gulp.parallel('watch','serv')
	)
);
