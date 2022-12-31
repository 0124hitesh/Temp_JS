// Inheritence
function SuperType(){
	this.name = "Virat"
}

SuperType.prototype.getName = function(){
	return this.name
}

function SubType(){
	this.age = 26
}

SubType.prototype = new SuperType();

SubType.prototype.getAge = function(){
	return this.age;
}

//Create a SubType object
var subTypeObj = new SubType();
console.log(subTypeObj.name); //Output: Virat
console.log(subTypeObj.age); //Output: 26
console.log(subTypeObj.getName()); //Output: Virat
console.log(subTypeObj.getAge()); //Output: 26

const a = new SuperType();
console.log(a.getName())
// console.log(a.getAge()) Error - a.getAge is not a function  


// -----------------------------------------------------------------------------

// Polymorphism
function Parent(){
    this.name = "Abc"
}

Parent.prototype.a = function(){
    console.log("Parent function")
}

function Child(){}

Child.prototype = new Parent()

Child.prototype.a = function(){
    console.log("Child Function")
}

new Parent().a();
new Child().a();

