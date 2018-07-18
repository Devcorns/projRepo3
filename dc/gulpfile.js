var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');


gulp.task('styls',()=>{
    
    gulp.src('gulptry/**/*.scss')
    
    .pipe(sass(
        {style:'compressed'}
     ))
     .on('error',console.error.bind(console))
     
    .pipe(gulp.dest('gulptry/css'))
    .pipe(livereload());
});

gulp.task('styleswatch',()=>{
    var server = livereload();
    gulp.watch('gulptry/**/*.scss',['styls']);
});




gulp.task('default',['styleswatch']);