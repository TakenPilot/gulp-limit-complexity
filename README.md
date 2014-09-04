gulp limit complexity
-----------------------

Limit complexity in JavaScript projects by failing build if function exceed limits

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
                difficulty: 14 //overall a difficulty value of fourteen to understand each function
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