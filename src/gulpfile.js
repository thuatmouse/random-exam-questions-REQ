const fs = require('fs');
const path = require('path');
const gulp = require('gulp');
const webpack = require('webpack');
const webpackOptions = require('./webpack.config');

gulp.task('build', function(callback) {
    webpackOptions.entry = './app/main.js';
    webpackOptions.output = {
        path: path.resolve(__dirname, '../public/javascripts/'),
        filename: 'bundle.js'
    };
    webpack(webpackOptions, function(error, stats) {
        // if error do something here such as gutil error
        callback();
    });
});

gulp.task('watch', function() {
    gulp.watch(['./**/*.vue'], ['build']);
    gulp.watch('./app/**/*.js', ['build']);
})

gulp.task('default', ['build', 'watch'], function() {});