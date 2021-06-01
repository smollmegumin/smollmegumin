"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var range = function range(start, end) {
  var steps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var new_arr = [];

  for (var i = start; i <= end; i += steps) {
    new_arr = [].concat(_toConsumableArray(new_arr), [i]);
  }

  return new_arr;
};

var sum = function sum() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return arr.reduce(function (acc, current) {
    return acc + current;
  }, 0);
};

console.log(sum(range(1, 10)));

var reverse = function reverse() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var new_arr = [];

  for (var i = 0; i < arr.length; i++) {
    new_arr.unshift(arr[i]);
  }

  return new_arr;
};

var reverse_in_place = function reverse_in_place(arr) {
  var temp = null;

  for (var i = 0; i < Math.floor(arr.length / 2); i++) {
    temp = arr[i];
    var last = arr.length - 1 - i;
    arr[i] = arr[last];
    arr[last] = temp;
  }
};

console.log(reverse([1, 2, 3, 4]));
var arr = [1, 2, 3, 4];
reverse_in_place(arr);
console.log(arr);
var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
}; //? Builds up a list structure like the one shown  above

var array_to_list = function array_to_list() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var obj_list = null;

  for (var value = arr.length - 1; value >= 0; value--) {
    obj_list = {
      value: arr[value],
      rest: obj_list
    };
  }

  return obj_list;
};

var list_to_arr = function list_to_arr(list) {
  var new_arr = [];

  for (var node = list; node; node = node.rest) {
    new_arr.push(node.value);
  }

  return new_arr;
};

var ntg = function ntg(list, index) {
  if (index == 0) {
    return list.value;
  }

  return ntg(list.rest, index - 1);
};

console.log(array_to_list([1, 2, 3]));
console.log(list_to_arr(list));
console.log(ntg(array_to_list([1, 2, 4]), 1));