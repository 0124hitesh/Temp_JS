// Stack
function Stack(...args){
    this.items = [...args];
}

Stack.prototype.push = function(e){
    this.items.push(e);
}

Stack.prototype.isEmpty = function(){
    return this.items.length < 1;
}

Stack.prototype.pop = function(){
    if(!this.isEmpty())
        return this.items.pop();
    return null;
}

Stack.prototype.peek = function(){
    return this.isEmpty() ? null: this.items[this.items.length - 1]; 
}

const a = new Stack(1, 2)
console.log(a.pop())
console.log(a.pop())
a.push(2)
console.log(a.peek())


// Stack using Class
class Stk{
    constructor(...args){
        this.items = [...args]
    }

    push(e){
        this.items.push(e);
    }

    isEmpty(){
        return this.items.length < 1;
    }

    peek(){
        return this.isEmpty() ? null: this.items[this.items.length - 1]; 
    }

    pop(){
        if(!this.isEmpty())
            return this.items.pop();
        return null;
    }

}

const s = new Stk();
console.log(s.items)
console.log(s.pop())
