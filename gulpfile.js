#!/usr/bin/env node

var gulp        = require('gulp');
var gulpif      = require('gulp-if');
var gutil       = require('gulp-util');
var concat      = require('gulp-concat');
var cssNano     = require('gulp-cssnano');
var sass        = require('gulp-sass');
var uglify      = require('gulp-uglify');
var jade        = require('gulp-jade');
var merge      = require('merge-stream');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');

var path = {
  'public': {
    root: 'www',
    styles: 'www/css',
    scripts: 'www/js',
    images: 'www/images',
    fonts: 'www/fonts'
  },
  app: {
    root: 'app',
    styles: 'app/styles/**/*.sass',
    scripts: 'app/scripts/**/*.js',
    images: 'app/images/**/*.*',
    fonts: 'app/fonts/**/*.*',
    templates: 'app/jade/**/*.jade'
  }
};

function isUglify() {
  return ['production', 'testing'].indexOf(process.env.NODE_ENV) > -1;
}

gulp.task('default', [
  'scripts',
  'styles',
  'fonts',
  'images',
  'templates'
]);

//gulp.task('watch', ['browserSync'], function() {
gulp.task('watch', function() {
  gulp.watch(path.app.scripts, ['scripts']);
  gulp.watch(path.app.styles, ['styles']);
  gulp.watch(path.app.images, ['images']);
  gulp.watch(path.app.templates, ['templates']);
  gulp.watch(path.app.fonts, ['fonts']);

});

/**
 * build scripts
 */
gulp.task('scripts', function(done) {
  gulp.src(path.app.scripts)
    //.pipe(gulpif(isUglify(), uglify()))
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest(path.public.scripts))
    .on('error', function(err){
      throw new gutil.PluginError('scripts', err);
    })
    .on('end', done);
});

/**
 * build styles
 */
gulp.task('styles', function(done) {
  gulp.src(path.app.styles)
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(autoprefixer())
    .pipe(gulpif(isUglify(), cssNano()))
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(path.public.styles))
    .on('error', sass.logError)
    .on('end', done);
});


/**
 * build fonts
 */
gulp.task('fonts', function(done) {
  gulp.src(path.app.fonts)
    .pipe(gulp.dest(path.public.fonts))
    .on('error', function(err){
      throw new gutil.PluginError('fonts', err);
    })
    .on('end', done);
});


/**
 * build images
 */
gulp.task('images', function(done) {
  gulp.src(path.app.images)
    .pipe(cache(imagemin({
      interlaced: true
    })))
    .pipe(gulp.dest(path.public.images))
    .on('error', function(err){
      throw new gutil.PluginError('images', err);
    })
    .on('end', done);
});

/**
 * build templates
 */
gulp.task('templates', function(done) {
  gulp.src('app/jade/*')
    .pipe(jade({
      pretty: isUglify()
    }))
    .pipe(gulp.dest(path.public.root))
    .on('error', function(err){
      throw new gutil.PluginError('templates', err);
    })
    .on('end', done);
});
