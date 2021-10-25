// let a = [];
// a[10] = "A_10"
// console.log(a)
// console.log(a.length)
// console.log(a.toString())

// let b = new Array()
// b.push(10)
// b.push("jkj")
// console.log(b, b.length)

// let c = new Array(3)
// console.log(c)
// c[0] = "ab"
// c[1] = "78"
// c[2] = 45
// c[10] = 455
// console.log(c, c.length)
// console.log(c[3])

// c.forEach(function(val){
//     console.info(val)
// })

// let d = ['a', 'b', 'c', 'cdef']
// console.info(d)
// d.pop()
// console.log(d)

// // d.unshift('c)  unshift - add at 0 index
// d.unshift('c')
// console.log(d)
// d.shift(); // remove element from 0 index
// console.log(d)


// let e = ['a', 'b', 'c']
// console.log(e.reverse())

// const s = "string"
// console.log(s.split('').reverse().join(''))
// console.log(s.split('').sort().reverse().join(''))

// let f = ['abc', 'def', "ljlkj", "xaz"] // only string array is required
// console.log(f.filter(function(val){
//     return val.includes('a')
// }))

// console.log(f.filter(function(val){
//     return val.match('a')
// }))

// f.fill('z', 1, 12) // don't add elements after range of array length
// console.log(f)


let g = ['abc', 456]
console.log(g.map(function(val, index){
    if(Number.isInteger(val)){
        return val*index;
    }
    else{
        return val;
    }
}))