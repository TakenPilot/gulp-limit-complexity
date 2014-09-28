gulp limit complexity
-----------------------

Limit complexity in JavaScript projects by failing build if function exceed limits.

[![Build Status](https://travis-ci.org/TakenPilot/gulp-limit-complexity.svg?branch=master)](https://travis-ci.org/TakenPilot/gulp-limit-complexity)

[![Code Climate](https://codeclimate.com/github/TakenPilot/gulp-limit-complexity/badges/gpa.svg)](https://codeclimate.com/github/TakenPilot/gulp-limit-complexity)

[![Coverage Status](https://coveralls.io/repos/TakenPilot/gulp-limit-complexity/badge.png?branch=master)](https://coveralls.io/r/TakenPilot/gulp-limit-complexity?branch=master)

[![Dependencies](https://david-dm.org/TakenPilot/gulp-limit-complexity.svg?style=flat)](https://david-dm.org/TakenPilot/gulp-limit-complexity.svg?style=flat)

[![NPM version](https://badge.fury.io/js/gulp-limit-complexity.svg)](http://badge.fury.io/js/gulp-limit-complexity)

Using Mozilla's JavaScript tree mapper to parse functions, and escomplex to calculate the complexity of every function.
This is mainly useful for keeping third-party developers honest and to a certain level of quality.
Can also be useful on large teams as a kind of contract for how complex or readable their code must be.

```JavaScript

var limitComplexity = require('gulp-limit-complexity');

gulp.task('complexity', function () {
    return gulp.src(path.src.js)
        .pipe(limitComplexity({
            cyclomatic: 4, //maximum of 4 code paths through any function
            halstead: {
                vocabulary: 10 //maximum of ten for vocabulary
            }
        }));
});

```

Another example

```JavaScript

var limitComplexity = require('gulp-limit-complexity');

gulp.task('complexity', function () {
    return gulp.src(path.src.js)
        .pipe(limitComplexity({
            halstead: {
                difficulty: 14 //overall a difficulty value of fourteen to understand
            },
            params: 3 //functions can only have a maximum of three parameters
        }));
});

```


Another example

```JavaScript

var limitComplexity = require('gulp-limit-complexity');

gulp.task('complexity', function () {
    return gulp.src(path.src.js)
        .pipe(limitComplexity({
            halstead: {
                operands {
                    distinct: 6 //only six unique operands each function
                }
            }
        }));
});

```
