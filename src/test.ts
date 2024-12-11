console.log('TEST')


console.log(sumNumbers_1([1, 2, 3, 4, 5]))

function sumNumbers_1(values: number[]): number {
    let value = 0;
    for(let i = 0; i < values.length; i++){
        value += values[i];
    }
    return value;
}

// console.log(sumNumbers_2([1, 2, 3, 4, 5]))

// const sumNumbers_2 = (values: number[]): number => {
//     let value = 0;
//     for(let i = 0; i < values.length; i++){
//         value += values[i];
//     }
//     return value;
// }



// const values = [1, 2, 3, 4, 5];


// const sumA = sumNumbers_1([1, 2, 3, 4, 5]);
// const sumB = sumNumbers_2([1, 2, 3, 4, 5]);

// const functionList = [];
// functionList.push(sumNumbers_1);
// functionList.push(sumNumbers_2);
// functionList[0]([1, 2, 3, 4, 5]);


// // Map

const celsiusTemps: number[] = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const convertCelsiusToFahrenheit = (celsiusTemp: number): number => {
    return celsiusTemp * 1.8 + 32;
}

const fahrenheitTempsA: number[] = celsiusTemps.map(convertCelsiusToFahrenheit)



function printTemp(temp: number){
    console.log('temp',temp)
}

celsiusTemps.forEach(printTemp)


const updatedTempsA = celsiusTemps.map(celsiusTemp => celsiusTemp + 1)
const updatedTempsB = celsiusTemps.filter(celsiusTemp => celsiusTemp > 50)
const updatedTempsC = celsiusTemps.find(celsiusTemp => celsiusTemp === 50)
const updatedTempsD = celsiusTemps.reduce((acc, celsiusTemp) => acc + celsiusTemp, 0)
const updatedTempsE = celsiusTemps.some(celsiusTemp => celsiusTemp > 50)
const updatedTempsF = celsiusTemps.every(celsiusTemp => celsiusTemp > 50)
const updatedTempsG = celsiusTemps.sort((a, b) => a - b)

console.log('updatedTempsA',updatedTempsA)
console.log('updatedTempsB',updatedTempsB)
console.log('updatedTempsC',updatedTempsC)
console.log('updatedTempsD',updatedTempsD)
console.log('updatedTempsE',updatedTempsE)
console.log('updatedTempsF',updatedTempsF)
console.log('updatedTempsG',updatedTempsG)


celsiusTemps.find(temp => temp === 50)


// const fahrenheitTempsB: number[] = celsiusTemps.map(celsiusTemp => {
//     return celsiusTemp * 1.8 + 32;
// })

// // console.log('fahrenheitTemps',fahrenheitTemps)



// const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

// console.log('names',names)

// const shortNames = names.filter(name => name.length < 5);

// console.log('shortNames',shortNames)

interface User{
    id: string;
    name: string;
    age: number;
}

const users: User[] = [
    {id: '1', name: 'Alice', age: 25},
    {id: '2', name: 'Bob', age: 30},
    {id: '3', name: 'Charlie', age: 35},
    {id: '4', name: 'David', age: 40},
    {id: '5', name: 'Eve', age: 45},
]

const incrementAge = (user: User): User => {
    user.age = user.age + 1;
    return user;
}

const updatedUsers1: User[] = users.map(incrementAge);

const updatedUsers2: User[] = users.map(user => {
    user.age = user.age + 1;
    return user;
});