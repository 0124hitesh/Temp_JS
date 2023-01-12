var a = Object.create(null);

console.log(a.prototype)
console.log(typeof a)

// Object.prototype is null
var b = Object.create(Object.prototype, {
    prop1: {
        value: 45,
        writable: true,
        enumerable: true,
        configurable: false
    },
}) 
console.log(b.prop1)
console.log()


// const obj = {};
// Object.defineProperties(obj, {
//     prop1:{
//         value: 4,
//         writable: true,
//     }
// })
// console.log(obj.prop1)


// OBJECT Assign

const ob1 = {a: 45};
const ob2 = {b: 456};
const ob3 = {c: 87}

// source, ...targets
const obNew = Object.assign({}, ob1, ob2);
console.log(obNew)