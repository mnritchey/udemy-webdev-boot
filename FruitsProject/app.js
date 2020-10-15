//jshint esversion:6

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, 'Please check your data entry, no name specified!'],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);



const fruit = new Fruit ({

  rating: 10,
  review: "Peaches are yummy!"
});

// fruit.save();



const personSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const Person = mongoose.model('Person', personSchema);

const pineapple = new Fruit({
  name: 'Pineapple',
  score: 9,
  review: 'Great fruit'
});

// pineapple.save();

const person = new Person ({
  name: 'Amy',
  age: 12,
  favoriteFruit: pineapple
});

// person.save();




Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  } else {

    mongoose.connection.close();

    fruits.forEach(function(fruit){
        console.log(fruit.name);
    });
  }
});

const plum = new Fruit({
  name: 'Plum',
  score: 8,
  review: 'Great fruit!'
});

plum.save();

Person.updateOne({name: 'John'}, {favoriteFruit: plum}, function(err){
  if(err) {
    console.log(err);
  } else {
    console.log('Succesfully updated the document.');
  }
});


// Fruit.updateOne({_id: '5f8858c75be6320cf8c1055f'}, {name: 'Peach'}, function(err){
//   if(err) {
//     console.log(err);
//   } else {
//     console.log('Succesfully updated the document.');
//   }
// });

// Fruit.deleteMany({name: 'Plum'}, function(err){
//   if(err) {
//     console.log(err);
//   } else {
//     console.log('Succesfully deleted the document.');
//   }
// });

// Person.deleteMany({name: 'John'}, function(err){
//   if(err) {
//     console.log(err);
//   } else {
//     console.log('Succesfully deleted all the documents.');
//   }
// });
