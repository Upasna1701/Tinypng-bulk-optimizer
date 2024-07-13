var gulp = require('gulp');
var tinypng = require('gulp-tinypng-compress');
 
gulp.task('tinypng', async function () {
    gulp.src('app/images/**/*.{png,jpg,jpeg,webp}')
        .pipe(tinypng({
            key: 'your API key', //Add your API key here
            sigFile: 'images/.tinypng-sigs',
            log: true
        }))
        .pipe(gulp.dest('assets/images'));
});


// gulp.task('default', ['tinypng']);
gulp.task('default', gulp.parallel('tinypng'));