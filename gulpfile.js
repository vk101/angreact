//https://github.com/babel/gulp-babel/issues/124 - babel dependency issue
var core = require('babel-core');
var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var react = require('gulp-react');
var htmlreplace = require('gulp-html-replace');
var pump = require('pump');

//New ones
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var babelify = require('babelify');

var path = {
    HTML: 'public/index.html',
    ALL: ['src/index.js', 'src/app/*.js', 'src/app/**/*.js', 'src/index.html'],
    JS: ['src/index.js', 'src/app/*.js', 'src/app/**/*.js'],
    MINIFIED_OUT: 'build.min.js',
    DEST_SRC: 'dist/src',
    DEST_BUILD: 'public',
    DEST: 'dist',
    ENTRY_POINT: 'src/index.js'
  };
gulp.task('transform', function(){
    gulp.src(path.JS)
        .pipe(babel({plugins: ['transform-react-jsx']}))
        .pipe(gulp.dest(path.DEST_SRC));
});

gulp.task('copy', function(){
    gulp.src(path.HTML)
        .pipe(gulp.dest(path.DEST));
});

gulp.task('watch', function(){
    gulp.watch(path.ALL, ['transform', 'copy']);
});

//gulp.task('default', ['watch']);

//Run this for final build
gulp.task('build', function(){
    gulp.src(path.JS)
      .pipe(babel({plugins: ['transform-react-jsx']}))
      .pipe(concat(path.MINIFIED_OUT));
      //.pipe(uglify(path.MINIFIED_OUT))
      //.pipe(gulp.dest(path.DEST_BUILD));
  });

  gulp.task('uglify-error-debugging', function (cb) {
    pump([
      gulp.src('dist/build/*.js'),
      uglify(),
      gulp.dest('dist/build/app.min.js')
    ], cb);
  });

  //New build process - this works
  gulp.task('build-new', function(){
      return gulp.src(path.JS)
    .pipe(babel())
    .pipe(browserify({
      entries: [path.ENTRY_POINT],
      transform: [babelify, reactify],
    }))
      .bundle()
      .pipe(source(path.MINIFIED_OUT))
      .pipe(streamify(uglify(path.MINIFIED_OUT)))
      .pipe(gulp.dest(path.DEST_BUILD));
  });
  