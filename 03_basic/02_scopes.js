// let a = 10
// const b = 20
// var c = 300

let a = 3000

if (true) {
    let a = 10
    const b = 20
    // console.log("Inner:", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "Aakash"

    function two() {
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);

    two()
    
}

// one()

if (true) {     
    const username = "Aakash"
    if (username === "Aakash") {
        const website = " Youtube"   
        // console.log(username + website);
    }
    // console.log(website);
    
}

// console.log(username);





//++++++++++++++++++++++++ intresting +++++++++++++++++++++++++++++
console.log(addone(4))

 function addone(num) {
    return num + 1
 }

 
addTwo(4)
 const addTwo = function(num){
    return num + 2
 }


  