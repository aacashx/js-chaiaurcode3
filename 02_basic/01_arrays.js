// array

const myArr = [0, 1, 2, 3, 4, 5]

const myHeros = ["Superman", "Spiderman", "Krish"]

const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr2[2]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()


// console.log(myArr.includes(3));
// console.log(myArr.indexOf(312));

const newArr = myArr.join()

// console.log(typeof(newArr));
// console.log(typeof(myArr));

// Slice or splice

console.log("A", myArr)

const myN1 = myArr.slice(1, 3)

console.log(myN1);
console.log(myArr);

console.log("B", myArr)

const myN2 = myArr.splice(1, 3)

console.log(myArr);
console.log(myN2);

 