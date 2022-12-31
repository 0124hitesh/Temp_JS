function* fun() {
    yield 10;
    yield 20;
    yield 30;
}
var gen = fun();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);


function* nextNatural() {
    var naturalNumber = 1;

    while (true) {
        yield naturalNumber++;
    }
}
var gen = nextNatural();
for (var i = 0; i < 10; i++) {
    console.log(gen.next().value);
}


const arr = ['a', 'b', 'c'];
function* generator() {
    yield 1;
    yield* arr;
    yield 2;
}
for (let value of generator()) {
    console.log(value);
}


// Advance Generators
function* fibonacci() {
    let current = 0;
    let next = 1;
    while (true) {
      const reset = yield current;
      [current, next] = [next, next + current];
      if (reset) {
        current = 0;
        next = 1;
      }
    }
  }
  
  const sequence = fibonacci();
  console.log(sequence.next().value);     // 0
  console.log(sequence.next().value);     // 1
  console.log(sequence.next().value);     // 1
  console.log(sequence.next().value);     // 2
  console.log(sequence.next().value);     // 3
  console.log(sequence.next().value);     // 5
  console.log(sequence.next().value);     // 8
  console.log(sequence.next(true).value); // 0
  console.log(sequence.next().value);     // 1
  console.log(sequence.next().value);     // 1
  console.log(sequence.next().value);     // 2
  


