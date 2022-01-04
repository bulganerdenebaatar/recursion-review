// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
// primitive - boolean, number, string
// undefined, symbol, func,(if found in array - null)(if found in obj - undefined)
var stringifyJSON = function(obj) {
  console.log(obj);

  // if typeof obj is a boolean, number, string, return as obj + ''
  if (typeof obj === 'boolean' || typeof obj === 'number') {
    return obj + '';
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (obj === NaN || obj === null || obj === Infinity) {
    return 'null';
  }
  // if obj is Array.isArray
  // if empty array , return '[]'

  if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    }
    // iterate through the array
    for (var i = 0; i < obj.length; i++) {
      console.log(obj[i]);
      // check array[i] - recursively
      if (typeof obj[i] === 'undefined' || typeof obj[i] === 'function' || typeof obj[i] === 'symbol') {
        obj[i] = null;
      }
      return '[' + obj.map(stringifyJSON) + ']';
    }
  }
  // if obj is object
  var result = '';
  if (!Array.isArray(obj) && typeof obj === 'object') {
    // if empty obj, return '{}'
    if (Object.keys(obj).length === 0) {
      return '{}';
    }
    // iterate over obj using for in loop
    for (var key in obj) {
      if (typeof obj[key] !== 'undefined' && typeof obj[key] !== 'function' && typeof obj[key] !== 'symbol') {
        result += '"' + key + '":' + stringifyJSON(obj[key]) + ',';
      }
    }
    result = '{' + result.substring(0, result.length - 1) + '}';
    return result;
  }
};