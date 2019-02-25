const gulp = require('gulp');
const clean = require('gulp-clean');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');

const scripts = () => {
    const tsResult = tsProject.src()
        .pipe(tsProject());
    
    return tsResult.js
        .pipe(gulp.dest('dist'));
};

const static = () => {
    return gulp
        .src(['src/**/*.json'])
        .pipe(gulp.dest('dist'));
};

const clear = () => {
    return gulp
        .src('dist')
        .pipe(clean());
};

const build = gulp.series([clear, static, scripts]);
const watch = gulp.parallel(build, () => {
    return gulp.watch(['src/**/*.ts', 'src/**/*.json'], build);
});

exports.build = build;
exports.watch = watch;
exports.default = watch;