var gulp = require('gulp');
var cssnano=require('gulp-cssnano');
var concat=require('gulp-concat');
var imagemin = require('gulp-imagemin')

gulp.task('css', function() {
    gulp.src('./src/css/*.css')
    .pipe(concat('index-merge.css'))
    .pipe(cssnano())
    .pipe(gulp.dest('./dist/css'));
});


gulp.task('js', function() {
    gulp.src('./app/*.js')
    .pipe(concat('index-merge.js'))
    .pipe(cssnano())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('img', function() {
    return gulp.src('./src/imagess/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images/'))
})
