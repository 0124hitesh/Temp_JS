// With the call() method, 
// you can write a method that can be used on different objects.

const user = {
    name: function(){
        return this.fn + " " + this.ln;
    }, 
    sum: function(x, y){
        return x + y;
    }
}

const user1 = {
    fn: "abc",
    ln: "xyz"
}

const user2 = {
    fn: "pqr",
    ln: "stu"
}

// Bind
let temp = user.name.bind(user1);
console.log(temp())

temp = user.sum.bind(null, 10, 20);
console.log(temp())

// console.log(user.name.call(user1));
// console.log(user.sum.call(null, 1, 2))
// console.log(user.sum.call(user1, 1, 2))

console.log(user.sum.apply(null, [1, 2]))
console.log(user.sum.apply(this, [1, 2]))

console.log(user.name.apply(user1, [1, 2]))
console.log(user.name.apply(this, [1, 2]))

