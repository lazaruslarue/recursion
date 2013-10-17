// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:

var getElementsByClassName = function (className) {
  var output = [];
  var context = context || document.body;
  var nodeCollection = context.childNodes; // allows us to recurse 
  var doit = function(value){
  	_.each(value.classList,function(myClass){
  		if (myClass != className){ // recurse on Class
  			return;
  		} else if (myClass == className) { // base case
  			output.push(value);
  		}
  	})
		if (value.childNodes.length > 0) { // recurse on Nodes
			_.each(value.childNodes,function(child){
				context = child
				doit(child)
			})
		} 
	}

	_.each(nodeCollection,function(v,i){
		doit(v,i)
	});

	// console.log('output: ')
	// console.log(output)  
  return output
};
// recursive case - nodes within nodes
// base case - this node is key