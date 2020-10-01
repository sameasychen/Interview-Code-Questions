
console.log("CallApplyBind log:")

var obj ={num: 2}

var addToThis = function(a,b,c){
    return this.num + a+b+c;
}

//Call:
console.log(addToThis.call(obj, 3, 2, 1)); // call: functionName.call(obj, functionArguments)


//Apply:
var obj2={num:5}
var arr = [3,2,1]
console.log(addToThis.apply(obj2,arr)); //apply


//Bind:
console.dir(addToThis.bind(obj)); //print all properties of an object

//addToThis.bind(obj) returns a function

var bound = addToThis.bind(obj)
console.log(bound(1,2,3))