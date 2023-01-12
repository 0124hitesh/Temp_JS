function Person(name, age){
    this.name = name;
    this.age = age;

    this.toString = () => `Person [${this.name}, ${this.age}]` ;
}

Person.prototype.gen = 'Male'

// don't use anonymous function
// Person.prototype.isAdult = () => {
//     console.log(this.age)
// }
Person.prototype.isAdult = function()  {
    return this.age >= 18;
}
const ob = new Person('abc', 19)
console.log(Person.prototype)
console.log(ob.isAdult.__proto__)
