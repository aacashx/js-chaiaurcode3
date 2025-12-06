// Primitive data type
// 7 types : String, Numbers, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.24

const isLoggedIn = false
const outSideTemperature = null
let userName;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


// const bigNumber = BigInt(2**3)
// console.log(bigNumber);

const bigNumber2 = 23434234234n




// Refernce Type or Non-primitive 
// Object, Array, Functions

const aarryHeros = ["Superman", "Spiderman", "Krish", "Shaktiman"];

let myObj = {
    name: "Aakash",
    age: 23, 
}

const myFunction = function(){
    console.log("Hello Tivsha")
}


// console.log(typeof bigNumber);
console.log(typeof bigNumber2);

console.log(typeof myFunction);
console.log(typeof id);


//-------------------------------------------------------

// Stack (Primitive), Heap (Non-Primitive)

let myCollegename = "Rajdhani College"
let myUniversityname = myCollegename

myUniversityname = "Delhi Technilogical University"

console.log(myCollegename);
console.log(myUniversityname);


let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "user2@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);













