const s = "abc DEF ghi abc";

console.log(s.length)

console.log(s[0])
console.log(s.charAt(0))
console.log(s.charCodeAt(0))

console.log(s.includes("abc"))

console.log(s.indexOf("abc"))
console.log(s.indexOf("a"))
console.log(s.indexOf("zz"))
console.log(s.search("ghi"))
console.log(s.search("z"))
console.log(s.lastIndexOf("a"))

console.log(s.toLowerCase())
console.log(s.toLocaleLowerCase())
console.log(s.toLocaleUpperCase);

console.log(s.repeat(3))

console.log(s.match('a'))
console.log(s.match(/a/ig))