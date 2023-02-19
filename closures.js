// IIFE - Immediately Invoked Functional Expression
// no need to call

(function(){
    console.log('IIFE')
})();

((name) => {
    console.log(name)
})("xyz")

!function fun(){
    console.log("IIFE")
}()


// Hoisting
m();
function m(){
    console.log('M function')
}

