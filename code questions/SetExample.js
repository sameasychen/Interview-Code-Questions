
let mySet = new Set();

mySet.add(1);

// console.log(mySet);
console.log(mySet.add(1));
console.log(mySet.add(2));
console.log(mySet.add("some text"));

let o = {a:1, b:2};

console.log(mySet.add(o));


console.log(mySet.has(2));

console.log(mySet.size);

console.log("delete: " +mySet.delete(2));

console.log(mySet.size);