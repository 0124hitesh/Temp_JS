// Pipe works the exact same way as Compose, 
// the only difference is that instead of executing arguments from right to left,
//  it executes them from left to right

function rev(str){
    return str.split('').reverse().join('')
}

function upperCase(str){
    return str.toUpperCase();
}

function getFirst_2_Character(str){
    return str.substring(0, 2);
}

console.log(rev(upperCase(getFirst_2_Character("abc")))) // BA

// ## COMPOSE
// console.log(getFirst_2_Character(upperCase(rev("abc")))) // "CB"

const compose = (...fns) => x => fns.reduce((preFns, curFns) => curFns(preFns), x); // refer line 26
ans = compose(rev, upperCase, getFirst_2_Character)
// ans = compose(getFirst_2_Character, upperCase, rev) // pipe
console.log(ans("abc")) // CB

// const compose = function(...fns){
//     return function(x){
//         return fns.reduce((preFns, curFns) => curFns(preFns), x)
//     }
// }

// Just Reduce's Refrence
// const arr = [1,2,3]
// const x = arr.reduce((preVal, curVal) => preVal + curVal, 0)
// console.log(x)