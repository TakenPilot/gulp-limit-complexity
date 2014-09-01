gulp limit complexity
-----------------------

Limit complexity in JavaScript projects by failing build if function exceed limits

```JavaScript

var limitComplexity = require('gulp-limit-complexity');

gulp.task('complexity', function () {
    return gulp.src(path.src.js)
        .pipe(limitComplexity({
            cyclomatic: 1,
            halstead: {
                vocabulary: 10
            }
        }));
});

```