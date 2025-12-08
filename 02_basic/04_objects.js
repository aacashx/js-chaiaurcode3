// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Shampy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmial.com",
    fullname: {
        username: {
            firstname: "Aakash",
            lastname: "Kumar"
        }
    }
}

// console.log(regularUser.fullname.username.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = {...obj1, ...obj2}
const obj4 = {obj1, obj2}
const obj5 = Object.assign({}, obj1, obj2) // so we are creating a new obj, so let create a empty obj(target) where all upcoming obj(source) will merge

// console.log(obj3);
// console.log(obj4);
// console.log(obj5);



const user = [ 
    {
        email: "user1@gm.com",
        id: 1
    },

    {
        email: "user1@gm.com",
        id: 1
    },

    {
        email: "user1@gm.com",
        id: 1
    },

    {
        email: "user1@gm.com",
        id: 1
    }
]

user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('name'));
console.log(tinderUser.hasOwnProperty('name2')); 




