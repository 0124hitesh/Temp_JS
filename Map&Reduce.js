const numbers = [2, 4, 8, 10];
const halves = numbers.map(x => x / 2);

const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
const longWords = words.filter(word => word.length > 6);


const arr = [1,2,3]
const x = arr.reduce((preVal, curVal, idx, arr) => preVal + curVal, 0)
console.log(x)

const y = arr.reduce((preVal, curVal, idx, arr) => preVal + arr[idx], 0)
console.log(y)