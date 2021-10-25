// Maps #########

// const m = new Map();
// m.set('name', 'xyz');
// m.set(1, 'one');
// m.set('one', 1);
// m.set(true, true);

// console.log(m.get(1), m.get('name'))
// console.log(m)

// let m_keys = m.keys();
// console.log(typeof m_keys)
// for(let i=0; i<m.size; ++i){
//     console.log(m_keys.next().value)
// }

// let m_values = m.values();
// for(let i=0; i<m.size; ++i){
//     console.log(m_values.next().value)
// }

// --------------------------------------------------------------------------------------------------------

// const n = new Map();
// n.set(['name'], "Array")

// const arr = ['name']
// n.set(arr, "Array2 as reference")

// console.log(n.get(['name'])) // return undefined
// console.log(n.get(arr))
// console.log(n)

// ---------------------------------------------------------------------------------------------------------

// const obj = {
//     name : 'xyz',
//     1 : 'one',
//     true : "true value",
//     'true' : true
// }
// Object.keys(obj).forEach(k => {
//     console.log(k)
// })

// Object.values(obj).forEach(k => {
//     console.log(k)
// })

// ---------------------------------------------------------------------------------------------------------

// const o = new Map();
// const obj = {
//     name : 'xyz',
//     1 : 'one',
//     true : "true value",
//     'true' : true
// }
// o.set(obj, "Object")
// console.log(o.get(obj))

// o.set({'name' : 'xyz'}, "Object2");
// console.log(o.get({'name' : 'xyz'})) // undefined


// Sets ###########

const s = new Set();
s.add(1);
s.add(1);
s.add("frfr");
s.add({name : 'xzy', 'abc' : 'abc'})
s.add([1, 2]);
console.log(s)
console.log(s.entries())
console.log(s.keys())