// Load plugins
var gulp          = require('gulp'),
    $             = require('gulp-load-plugins')(),
    sass          = require('gulp-ruby-sass'),
    autoprefixer  = require('gulp-autoprefixer'),
    minifycss     = require('gulp-minify-css'),
    jshint        = require('gulp-jshint'),
    uglify        = require('gulp-uglify'),
    rename        = require('gulp-rename'),
    concat        = require('gulp-concat'),
    mmq           = require('gulp-merge-media-queries'),
    del           = require('del'),
    fileinclude   = require('gulp-file-include'),
    runSequence   = require('run-sequence');


gulp.task('styles', function() {
  return sass('src/scss/**/*.{scss,sass}', { style: 'expanded' })
    .pipe($.changed('styles', {
      extension: '.{scss,sass}'
    }))
    .pipe($.sass({
      includePaths: require('node-bourbon').includePaths
    })
    .on('error', console.error.bind(console))
    )
    .pipe(gulp.dest('www/css/'))
    .pipe(gulp.dest('www/css/'))
    .pipe(mmq({log: true }))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
      cascade: false
    }))
    .pipe($.if( '*.css', $.csso() ))
    .pipe($.rename('styles.min.css'))
    .pipe(gulp.dest('www/css/'))
    .pipe(gulp.dest('www/css/'))
    .pipe($.size({
      title: 'styles'
    })
  );
});


// Scripts
gulp.task('scripts', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('www/js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('www/js'));
});

//Include Templates
gulp.task('fileinclude', function() {
  console.log('logged fileinclude start');
  return gulp.src('src/templates/*.html')
    .pipe(fileinclude())
    .pipe(gulp.dest('www/'));
});

// Clean
gulp.task('clean', function(cb) {
  del(['www/css', 'www/js/scripts.js'], cb);
});


gulp.task('watch', function() {

  // Watch templates
  gulp.watch('src/templates/*.html', ['fileinclude']);
  gulp.watch('src/templates/partials/*.tpl.html', ['fileinclude']);

  // Watch .scss files
  gulp.watch('src/scss/**/*.{scss,sass}', ['styles']);

  // Watch .js files
  gulp.watch('src/js/**/*.js', ['scripts']);

});


gulp.task('default', ['clean', 'styles', 'scripts', 'watch'], function() {

});
