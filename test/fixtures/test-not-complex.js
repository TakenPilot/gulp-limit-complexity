var SomeClass = (function () {

    function somePrivateMethod() {
        if (1 + 1 === 2) {
            return true;
        } else {
            return false;
        }
    }

    var constructor = function () {
        return 1 || 2 || 3 || 4;
    };
    constructor.prototype = {

      somePublicMethod: function () {
          if (1 + 1 === 2) {
              return true;
          } else {
              return false;
          }
      }

    };
    return constructor;
})();

module.exports = SomeClass;