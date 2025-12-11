const userEmail = "0"

if (userEmail) {
    console.log("got user email");

} else {
    console.log("Don't have a user email");
    
}

//falsy value
// false, 0, -0, BigInt 0n, null, "", null, undefined, Nan

//truthy values
// //"0", 'false', " ", [], {}, function(){}, 

// if (userEmail.length === 0) {
//     console.log("Arrray is empty");
// }

const emptObj = {}

if (Object.keys(emptObj).length === 0) {     
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??): null identified

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 12 ?? 100

console.log(val1);



// terniary operator

// condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80")  : console.log("more than 80");
