const browserSync = require('browser-sync'),
    gulp = require('gulp');


function BS() {
    browserSync.init({
        server: 'src',
    });

    gulp.watch(['src/**/*.html']).on('change', browserSync.reload);
}


exports.default =  BS;
