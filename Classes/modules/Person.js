export class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.toString = () => {
            return `Person [${this.name}, ${this.age}]`;
        }
    }
    isAdult() {
        return this.age >= 18;
    }
}