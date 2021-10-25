// IIFE - Immediately Invoked Functional Expression
// no need to call

(function(){
    console.log('IIFE')
})();


// Hoisting
m();
function m(){
    console.log('M function')
}

