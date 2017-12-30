(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.test = factory());
}(this, (function () { 'use strict';

function watch () {
  const sum = 1 + 3 + 5;
  const anotherSum = 10 + 20;
  return sum + anotherSum;
}

return watch;

})));
