
function sayMyName(){
    console.log("A");
    console.log("A");
    console.log("K");
    console.log("A");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumber(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}


const result = addTwoNumber(2, 4)

// console.log("Result: ", result);


function loginUserMessage(username  = "SAM"){
    if(username === undefined){ // !username ------ its also undefined 
        console.log(("Please enter a username"));
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Aakash"))
// console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1){

    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "aakash",
    price: 199
}

function handleObject(anyobject){
    // console.log(`username is ${anyobject.username} and price is ${anyobject.price}}`)
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 234
})


// array in fuction

const myNewArray = [2, 5, 6, 4, 7, 8]

function acceptArray(returnArray){
    return returnArray[1]
}

// console.log(acceptArray(myNewArray))
console.log(acceptArray([2, 5, 6, 7, 8, 9]))