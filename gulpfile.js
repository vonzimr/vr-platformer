var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var gls = require('gulp-live-server');

gulp.task('browserify', function() {
    return browserify('./js/main.js')
        .bundle().on('error', onError)
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('bundle.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./static/js'));
});

function onError(err){
    console.log(err);
    this.emit('end');
}

gulp.task('watch', function (){
  var server = gls.new(__dirname + '/app.js');
  serverNotify = function(file){server.notify(file);};
  server.start();
  gulp.watch('dist/js/*.js', serverNotify);
  gulp.watch('src/js/**/*.js', ['browserify']);
  //other watchers
});
