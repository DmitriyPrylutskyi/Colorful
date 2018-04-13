'use strict';

var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    bourbon = require('node-bourbon'),
    browsersync = require('browser-sync'),
    rigger = require('gulp-rigger'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    //imagemin = require('gulp-imagemin'), *.jpg minify
    //pngquant = require('imagemin-pngquant'), *.png minify
    reload = browsersync.reload;

var appRoot = './app',
    buildRoot = './',
    dir = {
        html: '',
        htmlTmp: '/html-tpl',
        php: '',
        js: '/js',
        scss: '/scss',
        css: '/css',
        images: '/img',
        fonts: '/fonts',
        libs: '/libs'
    },
    appPaths = {
        html: appRoot + dir.html + '/*.html',
        htmlTmp: appRoot + dir.htmlTmp + '/*.html',
        php: appRoot + dir.php + '/*.php',
        js: appRoot + dir.js + '/**/*.js',
        scss: appRoot + dir.scss + '/**/*.scss',
        images: appRoot + dir.images + '/**/*',
        fonts: appRoot + dir.fonts + '/**/*.*',
        libs: appRoot + dir.libs + '/**/*'
    },
    buildPaths = {
        html: buildRoot + dir.html,
        php: buildRoot + dir.php,
        js: buildRoot + dir.js,
        css: buildRoot + dir.css,
        images: buildRoot + dir.images,
        fonts: buildRoot + dir.fonts,
        libs: buildRoot + dir.libs
    };

gulp.task('stylesheets', function() {
    return gulp.src(appPaths.scss)
        .pipe(sourcemaps.init())
        .pipe(sass({
            //loadPath: [appPaths.mainScss]
            outputStyle: 'compressed',
            includePaths: bourbon.includePaths
        })).on('error', sass.logError)
        .pipe(autoprefixer({
            browsers: ['last 3 versions']
        }))
        .pipe(sourcemaps.write())
        // .pipe(rename('stylesheet.css'))
        .pipe(gulp.dest(buildPaths.css))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('js', function() {
    return gulp.src(appPaths.js)
        .pipe(uglify())
        .pipe(gulp.dest(buildPaths.js))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('html', function() {
    gulp.src(appPaths.html)
        .pipe(rigger())
        .pipe(gulp.dest(buildPaths.html))
        .pipe(reload({
            stream: true
        }));
});

// gulp.task('fonts', function() {
//     gulp.src(appPaths.fonts)
//         .pipe(gulp.dest(buildPaths.fonts))
//         .pipe(reload({
//             stream: true
//         }));
// });

// Copy images
// gulp.task('images', function() {
//     gulp.src(appPaths.images)
//         .pipe(gulp.dest(buildPaths.images))
//         .pipe(reload({
//             stream: true
//         }));
// });

// gulp.task('libs', function() {
//     gulp.src(appPaths.libs)
//         .pipe(gulp.dest(buildPaths.libs))
//         .pipe(reload({
//             stream: true
//         }));
// });

gulp.task('php', function() {
    gulp.src(appPaths.php)
        .pipe(rigger())
        .pipe(gulp.dest(buildPaths.php))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('server', function() {
    browsersync.init({
        server: buildRoot,
        port: 4000,
        notify: false,
        open: true
    });
});

gulp.task('build', [
    'html',
    'php',
    'js',
    'stylesheets',
    // 'fonts',
    // 'images',
    // 'libs'
]);

gulp.task('watch', function() {
    watch([appPaths.html, appPaths.htmlTmp], function(event, cb) {
        gulp.start('html');
    });
    // watch([appPaths.htmlTmp], function(event, cb) {
    //     gulp.start('html');
    // });
    watch([appPaths.php], function(event, cb) {
        gulp.start('php');
    });
    watch([appPaths.scss], function(event, cb) {
        gulp.start('stylesheets');
    });
    watch([appPaths.js], function(event, cb) {
        gulp.start('js');
    });
    watch([appPaths.images], function(event, cb) {
        reload({
            stream: true
        });
    });
    watch([appPaths.fonts], function(event, cb) {
        reload({
            stream: true
        });
    });
    watch([appPaths.libs], function(event, cb) {
        reload({
            stream: true
        });
    });
});

gulp.task('default', [
    'build',
    'server',
    'watch'
]);