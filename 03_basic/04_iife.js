// Immediately Invoked Function Expressions (IIFE)


// function chai() {
//     console.log(`DB CONNECTED`);
// }
// chai()

(function chai() {
    //Named iife
    console.log(`DB CONNECTED`);
})();


// ()()

( () => {
    //Unnamed iife
    console.log(`DB CONNECTED 2`)
})();

( (name) => {
    console.log(`DB CONNECTED 3 is ${name}`)
})(`Aakash`);

