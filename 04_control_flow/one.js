// if
// const isUserLoggedIn = true
// const temperature = 51


// if (temperature === 51){
//     console.log("Temperature is less than 50");
// }else {
//     console.log("Temperature is greater than 50")
// }
// console.log("Execute");

// <, >, <=, >=. == !=, ===

// const score = 200

// if (score > 100) {
//     const power = "fly" 
//     console.log(`user power is ${power} `);
// }

// console.log(`user power is ${power} `);


// const balance = 1000

// if (balance > 500) console.log("test");
// if (balance > 500) console.log("test"), console.log("test2"); not reccommended

// if (balance < 500) {
//     console.log("less than")
// }else if (balance < 750) {
//     console.log("less than 750")
// }else if (balance < 950) {
//     console.log("less than 950")
// }else if (balance < 1250) {
//     console.log("less than 1250")
// }


const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (isUserLoggedIn && debitCard) {
    console.log("allowed to buy courses");
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("user logged in");
    
}







