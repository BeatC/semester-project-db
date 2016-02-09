'use strict';

import gulp from 'gulp';

export default function watch(config) {
    let src = config.paths.src;
    gulp.task('watch', () => {
        gulp.watch(`${src}/styles/**/*.scss`, ['styles']);
        gulp.watch(`${src}/js/**/*.js`, ['scripts', 'jscs']);
        gulp.watch(`${src}/views/**/*.html`, ['views']);
        gulp.watch(`${src}/images/**/*.*`, ['images']);
    });
}
