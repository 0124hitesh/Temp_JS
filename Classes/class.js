class Person {
    constructor(name, age){
        this.name = name
        this.age = age

        this.toString = () => {
            return `Person [${this.name}, ${this.age}]`
        }
    }

    isAdult(){
        return this.age >= 18
    }
}

Person.gen = 'Male'

const ob1 = new Person('abc', 20)
// console.log(ob1.name, ob1.age, ob1.isAdult(), ob1.toString())
// console.log(ob1)


class Student extends Person{
    constructor(name, age){
        super(name, age)
        this.school = arguments[2]
    }
}
const ob2 = new Student('xyz', 10, 'acv school')
console.log(ob2)

ob2.age = 100
console.log(ob2.age)

Object.defineProperty(ob2, 'age', {
    writable : false
})

ob2.age = 80
console.log(ob2.age)