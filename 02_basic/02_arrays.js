const marvelHeros = ['Spiderman', 'Ironman', 'Thor']
const dcHeros = ['Superman', 'Batman', 'Flash']

// marvelHeros.push(dcHeros);

// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros)

const allNewHeros = [...dcHeros, ...marvelHeros]
console.log(allNewHeros);


const anotherArry = [1, 2, 3, [4, 5, 6], 7, [8, 9, [4, 5, [6, 7]]]]

const realAnotherArray = anotherArry.flat(Infinity)
console.log(realAnotherArray);



console.log(Array.isArray('Aakash'))
console.log(Array.from('Aakash'))
console.log(Array.from({name: 'Aakash'})) //intresting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
