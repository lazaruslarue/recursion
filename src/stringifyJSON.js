// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  var result = [];
  var	newResult = [];
  if (obj === null) {
  	result.push('null')
  } 
  
  else if (typeof obj == "string") {
  	result.push('"'+  obj+ '"')
  } else if (Array.isArray(obj)) {
  	if (obj.length < 1 ){
  		result.push('[]')
  	} else {
  		var out = []
  		_.each(obj,function(val){
					out.push( stringifyJSON(val) )
  		})
			result.push('['+out.join(',')+']')  		
  	}
  } else if (typeof	obj == "object") {
  	
    var out = []

  	_.each(obj,function(val,i){
      // we should check if the object is a function or undefined. 
      // if either are true, then we will return {} isntead of another function
      if (typeof val == "function" || typeof val == "undefined" ) {
        debugger
        out = []
      } else {
        var outval = stringifyJSON(val) 
        var outkey = stringifyJSON(i)
        out.push( outkey + ':' + outval)
      }
		})
      	
  	result.push('{'+out.join(',')+'}')
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