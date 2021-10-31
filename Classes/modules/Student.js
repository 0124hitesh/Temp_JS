import  {Person}  from "./Person.js";

export class Student extends Person {
    constructor(name, age) {
        super(name, age);
        this.school = arguments[2];
    }
    isInSchool() {
        return !! this.school;
    }
}