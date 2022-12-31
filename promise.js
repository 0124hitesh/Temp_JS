console.log('start')

// const p = new Promise(function(resolve, reject){
//     const ran = Math.random();
//     console.log('Random = ' + ran)
//     if(ran > .5){
//         resolve()
//     }
//     else{
//         reject()
//     }
// }).then(function(data){
//     console.log('Resolved ', data)
// }, function(d){
//     console.log('Rejected ', data)
// })

const p2 = new Promise(function(resolve, reject){
    // const ran = Math.random();
    const ran = 0.1;
    console.log('Random = ' + ran)
    if(ran > .5){
        resolve()
    }
    else{
        reject()
    }
}).then(()=> console.log("Resolved")).catch(()=> console.log("Rejected"))

console.log(p2)
// console.log(p)
console.log('End')