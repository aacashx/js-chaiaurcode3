"Use strict"; //This will force to use lastest JS version

// alert("Hello Aakash") // will not work because alert is browser specific function

//code readablity is top priority, warna experience kharab ho jayega


let userName = "Aakash"; 
let age = 22;
let isStudent = true;
let address; //undefined
let phone = null; //null

//number ==> 2 to the power 53 tak safe hai
//bigint ==> 2 to the power 53 se zyada ke liye use karte hai
//string ==> "Aakash", 'Aakash', `Aakash` (backtick)
//boolean ==> true/false
//undefined ==> jab variable ko value assign nahi karte tab undefined hota hai
//null ==> jab explicitly variable ko empty set karte hai tab null hota hai
//symbol ==> unique identifier ke liye use karte hai (advanced topic) 


console.log("Name: ", userName);
console.log("Age: ", age);
console.log("Is Student: ", isStudent);
console.log("Address: ", address);
console.log("Phone: ", phone);

console.log("Data type of name: ", typeof userNameame);
console.log("Data type of age: ", typeof age);
console.log("Data type of isStudent: ", typeof isStudent);
console.log("Data type of address: ", typeof address);
console.log("Data type of phone: ", typeof phone);

//Note: In JavaScript, null is considered an object type due to a historical bug.



