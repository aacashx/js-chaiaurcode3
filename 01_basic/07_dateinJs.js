 // Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate)



// let myCreatedDate = new Date(2023, 0, 23)
let myCreatedDate = new Date(2023, 0, 23, 5, 23, 53)
// // let myCreatedDate = new Date("2023-01-12")
// let myCreatedDate = new Date("01-14-2023")

// // console.log(myCreatedDate.toString());
// // console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

// console.log(`The month is ${newDate.getMonth()+1} and the day is ${newDate.getDay()}`) 

// newDate.toLocaleString('default', {
//     weekday: "long",
// })

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    day: "2-digit",
    month: "long"
}));










