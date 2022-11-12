// function sum(x, y){
//     return x+y;
// }

// const mul = function(x, y){
//     return x*y;
// }

// const dif = (x, y) => x-y;
// const dif2 = (x, y)=>{
//     return x-y;
// }

// The call() method takes arguments separately.
// The apply() method takes arguments as an array.

// The apply() method is very handy 
// if you want to use an array instead of an argument list.

// console.log(sum(1, 2));
// console.log(sum.call(null, 1, 2))
// console.log(sum.apply(null, [1, 2]))
// console.log(sum.apply(window, [1, 2]))

// console.log(mul(1, 2))
// console.log(dif(3, 1), dif2(3,1))

// const getObj = ()=> ({name : 'xyz'})
// console.log(getObj(), getObj)

// function sum2(){
//     console.log(arguments);

//     let sum = 0;
//     for(let i=0; i<arguments.length; ++i){
//         sum += arguments[i];
//     }

//     return sum;
// }

// console.log(sum2())
// console.log(sum2(1, 2))


// -----------------------------------------------------------------------
// CALLBACK

function on_End(val){
    console.log(val)
}

function x(call_back, x, y){
    console.log(x + " " + y)
    on_End(10)
    call_back(11)
}

x(on_End, 12, 13)

// ------------------------------------------------------------------------

// function dividend(x){
//     return function(y){
//         if(y === 0){
//             console.log('/0')
//             return;
//         }

//         return x/y;
//     }
// }

// console.log( (dividend(12))(1) )
// console.log( (dividend(12))(2) )

// const temp = dividend(12);
// console.log(temp(3))