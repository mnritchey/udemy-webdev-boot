//jshint esversion:6

const superheroes = require('superheroes');
const supervillains = require('supervillains');

let mySuperheroName = superheroes.random();
console.log('Hero = ' + mySuperheroName);

let mySupervillainName = supervillains.random();
console.log('Villain = ' + mySupervillainName);
