gulp limit complexity
-----------------------

Limit complexity in JavaScript projects by failing build if function exceed limits.

> **⚠ Warning**
> This library is deprecated. The underlying libraries that this package relies on are either unmaintained or have security warnings. I'm deprecating this project until someone rewrites it with modern tooling.

Using Mozilla's JavaScript tree mapper to parse functions, and escomplex to calculate the complexity of every function.
This is mainly useful for keeping third-party developers honest and to a certain level of quality.
Can also be useful on large teams as a kind of contract for how complex or readable their code must be.

##Install

```Bash

npm install gulp-limit-complexity

```

##Example

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

##Another example

```JavaScript

var limitComplexity = require('gulp-limit-complexity');

gulp.task('complexity', function () {
    return gulp.src(path.src.js)
        .pipe(limitComplexity({
            halstead: {
                difficulty: 14 //difficulty represents readability
            },
            params: 3 //functions can only have a maximum of three parameters
        }));
});

```


##Another example

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
