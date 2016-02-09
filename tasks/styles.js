'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';

/**
 * Factory for styles building
 * @params
 * {Object} config - object containing server object and paths
 */
export default function styles(config) {
    /**
    * Task definition for styles compiling. Depends from 'server' task
    */
    gulp.task('styles', ['server'], () => {
        gulp.src(`${config.paths.src}/styles/**/*.scss`)
          .pipe(sourcemaps.init())
            .pipe(sass())
          .pipe(sourcemaps.write('maps'))
          .pipe(gulp.dest(`${config.paths.dest}/css`))
          .pipe(config.server.reload());
    });
}
