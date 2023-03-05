// An iterator is any JavaScript object that can be used to 
// iterate over a collection of data.
//  An iterator would generally have a next() method using which 
//  it can iterate over the data. The next method returns two properties:

// value: the value in the iteration
// done: boolean property signifying the end of the iteration.

// After the iteration is completed, the next() method returns { done: true };

// Compared to the usual for-loop or while-loop, 
// the loading of the entire data is not required before iterating over it. 
// By using an iterator, only the current position of the element is required.

const coll = ['a', 'b', 'c'];

const it = coll[Symbol.iterator]();

while(true){
    next = it.next();
    if(next.done) break;

    console.log(next)
}

console.log(it.next())