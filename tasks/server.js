'use strict';

import gulp from 'gulp';
import connect from 'gulp-connect';

/**
 * Creating livereload server
 * @params
 * {Object} config - config objects for paths and other information
 */
export default function server(config) {
    gulp.task('server', () => {
        // Check if server exists
        if (!config.server) {
            connect.server({
                root: config.paths.dest,
                port: 1337,
                livereload: true
            });
            config.server = connect;
        }
    });
}
