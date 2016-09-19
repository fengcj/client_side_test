function A(name){
	this.name = name;
}

function B(){

}

B.prototype.c = "c";

A.prototype = new B();
A.prototype.methodA = function(){
	console.log("Hello " + this.name);
}
var a = new A("node");

console.log(a.c);
console.log(a.name);g
a.methodA();

console.log("===");

console.log(a.__proto__);



/*
when use `new` to create an object:
   1) create a empty object {};
   2) copy the prototype of the function to the empty object
   3) init this object's own attribute, like `name`
*/