// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:

var getElementsByClassName = function (className) {
  var output = [];
  console.log('starting context: ')
  console.log(context)
  var context = context || document.body
  console.log(context)
  var nodes = context.childNodes; // allows us to recurse 
  var doit = function(value,node){
  	console.log('context in doit')
  	console.log(context)
			if (value.childNodes.length > 1) { //recursive 
				console.log('doin it')
				console.log(value.childNodes)
				_.each(value.childNodes,function(child){
					context = value
					console.log("context" + context)
					doit(child)
				})
			} else if (value.classList == className){ // base case 
				console.log('pushed!!!!!!!!!!!!!!!!!!')
				output.push(value)
			} 
		}

	_.each(nodes,function(v,i){
		doit(v,i)
	});

	console.log('output: ')
	console.log(output)  
  return output
};
// recursive case - nodes within nodes
// base case - this node is key

//document.body
//element.childNodes
//element.classList




