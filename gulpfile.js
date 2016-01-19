var gulp = require('gulp');
var shell = require('shelljs');

var baseUrl = './frontend/';
var cordovaPath = 'cordovaPlatforms/www/';
var sources = {
  'lib': ['./frontend/lib/angular/angular.min.js', './frontend/lib/angular-route/angular-route.min.js', './frontend/lib/lodash/lodash.min.js'],
  'app': ['./frontend/**/*.*'],
  'assets': ['./frontend/assets/**.*'],
  'index': 'index.html'
};

gulp.task('copyLib', function() {
  gulp.src(sources.lib)
    .pipe(gulp.dest(cordovaPath + '/lib/'));
});

gulp.task('copyApp', function() {
  gulp.src(sources.app)
    .pipe(gulp.dest(cordovaPath + '/'));
});

gulp.task('copyAssets', function() {
  gulp.src(sources.assets)
    .pipe(gulp.dest(cordovaPath + '/assets/'));
});

gulp.task('copyIndex', function() {
  gulp.src(sources.index)
    .pipe(gulp.dest(cordovaPath));
});

gulp.task('copy', ['copyLib', 'copyApp', 'copyAssets', 'copyIndex']);

gulp.task('build', function() {
  shell.exec('cd cordovaPlatforms && cordova build && cordova run browser && cd ..');
});

gulp.task('default', ['copy', 'build']);