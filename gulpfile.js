const browserSync = require('browser-sync'),
    gulp = require('gulp'),
    browSync = require('browser-sync');


function BS() {
    browserSync.init({
        server: 'src',
    });

    gulp.watch(['src' + '/**/*.html']).on('change', browserSync.reload);
}


exports.default =  BS;