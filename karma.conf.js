// Karma configuration
// Generated on Sat Jul 25 2015 19:12:21 GMT+0530 (India Standard Time)

module.exports = function (config) {
    config.set({
        frameworks: ['jasmine'],
        reporters: ['dots', 'coverage'],
        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'app/*.js',
            'test/*.js'
        ],
        coverageReporter: {
            type: 'html',
            dir: 'build/coverage/'
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS2'],
        singleRun: false
    })
}