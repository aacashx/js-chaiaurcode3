// singleton
// Onject.create

// object literals

const mySym = Symbol("Key1") 

const JsUser = {
    name: "Aaksh",
    "full name": "Aakash Kumar",
    [mySym]: "myKey1",
    age: 23,
    location: "Delhi",
    email: "aakash@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ['Moday', 'Saturday']
}

// console.log(JsUser.email); //not correct way
// console.log(JsUser['email']); 
// // console.log(JsUser.full name); 
// console.log(JsUser['full name']); 
// console.log(JsUser[mySym]);
// // console.log(typeof mySym);


JsUser.email = "aakash@openai.com"
// Object.freeze(JsUser)
JsUser.email = "aakash@mircosift.com"

// console.log(JsUser);


JsUser.greeting = function(){
    console.log('Hellow JS user')
}
console.log(JsUser.greeting())


JsUser.greetingTwo = function(){
    console.log(`Hello JS user ${this.name}, age of ${this.age} `)
}
console.log(JsUser.greetingTwo())

