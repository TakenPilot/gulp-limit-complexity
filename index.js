var limitComplexity = function (limits) {
    var cr = require('escomplex'),
        treeWalker = require('escomplex-ast-moz'),
        esprima = require('esprima'),
        map = require('vinyl-map'),
        util = require('util'),
        _ = require('lodash'),
        gutil = require('gulp-util');

    return map(function (contents, filename) {
        var str = contents.toString();

        function exceedsLimits(limits, report) {
            var result = _.reduce(limits, function (obj, value, key) {
                var result;
                if(typeof value === 'object') {
                    result = exceedsLimits(limits[key], report[key]);
                    if (result) {
                        obj[key] = result;
                    }
                } else if (value < report[key]) {
                    obj[key] = report[key];
                }

                return obj;
            }, {});

            if (!_.isEmpty(result)) {
                //where it is
                if (report.name) {
                    result.name = report.name;
                    if (report.line) {
                        result.name += ", line " + report.line;
                    }
                }
                return result;
            } else {
                return false;
            }
        }

        var report = cr.analyse( esprima.parse(str, {loc : true}),  treeWalker),
            result,
            problems = _.filter(_.map(report.functions,
                _.partial(exceedsLimits, limits)));

        if (!_.isEmpty(problems)) {
            result = filename + " has " + problems.length +" complexity errors:\n";
            result += _.reduce(problems, function (str, problem) { return str + util.inspect(problem, true, 5) + "\n"; }, "");
            throw new gutil.PluginError({
                plugin: "limit-complexity",
                message: result
            });
        }
    });
};

module.exports = limitComplexity;