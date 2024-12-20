var nom = "zjj"; 

let nom2 = "nhyhi"; // string
console.log(nom2);
nom2 = 13; // int
nom2 = true; // boolean
nom2 = 1.9; // float na double
nom2 = []; // array
nom2 = {}; // object 

/*
const PI = 3.14;

if(true) {
  let nom2 = "aaaa";
  console.log("Nom: " + nom);
  console.log(`Nom2: ${nom2}`);
}   

let firstName = "Azerty";
let myAge = 23;
*/

const score1 = 48;
const score2 = 88;
const addition = score2 % score1;
console.log(addition, 10 % 2); 

let num1 = 9;
num1 = num1 + 1; // 10
// ou
num1 += 1; // 11
// ou
num1++ ;// 12
++num1; // 13

let sum = num1++; // sum = 13 num1 = 14
console.log(`num1++ ${sum} ${num1}`);
sum = ++num1; // sum = 15 num1 = 15
console.log(`++num1 ${sum} ${num1}`);

num1 -= 9;

let myScore = "12";
console.log(Number(myScore), parseInt(myScore), myScore);

let car1 = {
  model: "S3",
  brand: "Tesla",
  releaseYear: 2022,
  isElectric: true,
};

car1.colorPrimary = "red";
car1["price-primary"] = 24000;

console.log(car1.model, car1["model"]); 

let monTableau = ["Titanic", "Queen Elizabeth"];
monTableau[1] = "Queen Mary";

monTableau.push("Oasis of the Seas"); // ajout apres
monTableau.unshift("Relation Sea"); // ajout avant

monTableau.pop(); // retrait deriner element
monTableau.shift(); // retrait premier element

monTableau.splice(1, 0 , "Emma Maersk", "Test");
let newArray = [...monTableau.slice(0, 2), ...monTableau.slice(3, monTableau.length)];

console.log(`monTableau contient ${newArray.length} éléments. ${newArray}`);

let films = ["Avatar 2", "Red One"];
let series = ["Dune", "GoT"];

let shows = [...films, ...series];
//console.log(shows);

//console.log(...films);
//console.log(films);

// let variable1 = 80;
// let variable2 = variable1;

// console.log(variable1, variable2);

// variable1 = 22;
// console.log(variable1, variable2);

// let score = 30;

// total = 2 * score;
// winner = score + 12;

let dessinsAnimes = ["Moana", "Frozen", "Cinderella"];
let dessinsAnimes2 = dessinsAnimes;

console.log( "le même", dessinsAnimes, dessinsAnimes2);
dessinsAnimes.push("Rick and Morty");
console.log( "le même 2", dessinsAnimes, dessinsAnimes2);
