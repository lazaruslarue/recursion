// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  var result = [];
  var	newResult = [];
  if (obj === null) {
  	result.push('null')
  } else {
		result.push(obj)
	}
	
	newResult = result.join(',')
	return newResult
} 


// base case(s): is a string or number. 
// 
// recursive case(s): is a nested array or obj. 
// recurse on objects and arrays

// if string, use double quotes
	

// result = [];
// _each() to recurse and add to result

// .join

// result = [];
// _each() to recurse and add to result
// newResult = '[' + result.join(',') + ']'