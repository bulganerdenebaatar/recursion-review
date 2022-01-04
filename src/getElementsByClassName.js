// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

/*
use helper function inside the main function
helper function:
  parameter element -- document body
    *declare empty array
    *if the document body has a class list that has the class name, then push to the array
    *iterate through the document body child nodes
        recurse over the child nodes
  return array
*/

var getElementsByClassName = function(className) {
  var arrayResult = [];

  var innerFunction = function (element) {
    // console.log(element);
    if (element.classList !== undefined && element.classList.contains(className)) {
      // undefined.contains
      arrayResult.push(element);
    }

    // when childnodes doesnt have classlist
    for (var i = 0; i < element.childNodes.length; i++) {
      innerFunction(element.childNodes[i]);
    }
  };
  innerFunction(document.body);
  return arrayResult;
};
