function Person(name, age){
    this.name = name;
    this.age = age;

    this.toString = () => `Person [${this.name}, ${this.age}]` ;
}

Person.prototype = Object.create(null)
Person.prototype.constructor = Person

Person.prototype.gen = 'Male'

// don't use anonymous function
// Person.prototype.isAdult = () => {
//     console.log(this.age)
// }
Person.prototype.isAdult = function()  {
    return this.age >= 18;
}


const ob = new Person('abc', 19)
// console.log(ob.gen)

// console.log(ob.toString(), ob.isAdult())
// console.log(ob.name, ob.age, ob)


function Student(){
    // Person.call(this, name, age)
    Person.apply(this, arguments)
    this.school = arguments[2]
}

Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor = Student

Student.prototype.isInSchool = function(){
    return !!this.school
}

const ob2 = new Student('xyz', 12, 'avxc school')
const ob3 = new Student('stu', 19)

console.log(ob2, ob2.name)
console.log(ob3)
console.log(ob2.isInSchool(), ob3.isInSchool())