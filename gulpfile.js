var gulp = require( 'gulp' );
var babel = require( 'gulp-babel' );
var uglify = require( 'gulp-uglify' );
var rename = require( 'gulp-rename' );
var wrap = require( 'gulp-wrap' );

gulp.task( 'default', function () {
    return gulp.src( 'index.js' )
        .pipe( babel( { blacklist: [ 'strict' ] } ) )
        .pipe( rename( { suffix: '.min' } ) )
        .pipe( uglify() )
        .pipe( wrap( 'javascript:(function(){<%= contents %>}())' ) )
        .pipe( gulp.dest( 'dist' ) );
} );
