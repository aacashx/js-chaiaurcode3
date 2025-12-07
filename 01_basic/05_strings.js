const name = "Aakash"
const repoCount = 50

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);



const gameName = new String("Aakashx360")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length); 
console.log(gameName.toUpperCase());

console.log(gameName.charAt(5));
console.log(gameName.indexOf('3'));


const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,1);
console.log(anotherString);


const newStringOne = "     Aakash    "
console.log(newStringOne);
console.log(newStringOne.trim());
 
const url = "https://aakash.com/aakash%20kumar"

console.log(url.replace('%20', '-'))
console.log(url.includes('Tvisha'))


console.log(gameName.split('3','2'));
console.log(gameName.split('x',));










