'use strict';

import gulp from 'gulp';

// Server
import server from './tasks/server';

// Styles
import styles from './tasks/styles';

// Scripts
import scripts from './tasks/scripts';

// Images
import images from './tasks/images';

// Views
import views from './tasks/views';

// Watching
import watch from './tasks/watch';

/**
 * Config object for all tasks
 */
const config = {
    paths: {
        src: 'app/frontend/src',
        dest: 'app/frontend/build'
    },
    server: null
};

// Creating tasks
server(config);
views(config);
styles(config);
scripts(config);
watch(config);

gulp.task('default', ['server', 'views', 'styles', 'scripts', 'images', 'watch']);
