var limitComplexity = require('../.'),
    gulp = require('gulp'),
    map = require('vinyl-map'),
    expect = require('chai').expect,
    gutil = require('gulp-util');

describe('Limit Complexity', function () {
    it('Should not fail complexity', function (done) {
        gulp.src('./test/fixtures/test-not-complex.js')
            .pipe(limitComplexity({
                cyclomatic: 5,
                halstead: { difficulty: 7 }
            })).pipe(map(function (){
                done();
            }));
    });

    it('Should fail on complexity', function (done) {
        gulp.src('./test/fixtures/test-not-complex.js')
            .pipe(limitComplexity({
                cyclomatic: 1,
                halstead: { difficulty: 1 }
            })).on('error', function () {
                done();
            });
    });
});

