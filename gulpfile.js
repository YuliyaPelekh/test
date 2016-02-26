/**
 * Created by Oleg_Malyshev on 2/26/2016.
 */
var path = require('path');
var karma = require('karma');
var gulp = require('gulp');

gulp.task('start-karma',function(){
    var options = {
        configFile:path.join(__dirname,'karma.conf.js'),
        singleRun:true
    };
    return new Promise(function (fulfil, reject) {
        var server = new karma.Server({
            configFile: options.configFile,
            singleRun: options.singleRun
        }, function(err) {
            if (err) {
                reject(err);
            } else {
                fulfil();
            }
        });

        server.start();
    });
});

gulp.task('tdd',['start-karma']);