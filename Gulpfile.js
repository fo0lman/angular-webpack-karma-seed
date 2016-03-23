var gulp = require('gulp');
var gutil = require('gulp-util');
var assign = require('object-assign');
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config");

gulp.task("webpack", function(callback) {
    webpack(webpackConfig, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});

gulp.task("wds", function(callback) {
    var compiler = webpack(webpackConfig);
    new WebpackDevServer(compiler, {
        // server and middleware options
    }).listen(8080, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
        // keep the server alive or continue?
        callback();
    });
});

gulp.task('default', ['wds']);
