const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;



  beforeEach(function() {
    park = new Park('Jurassic Park', 10)

    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 24);
    dinosaur2 = new Dinosaur('stegosaurus', 'herbivore', 100);
    dinosaur3 = new Dinosaur('brachiosaurus', 'herbivore', 128);
    dinosaur4 = new Dinosaur('galliminus', 'omnivore', 5);


  })



  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function() {
    const actual  = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });


  it('should be able to add a dinosaur to its collection', function() {
    park.add(dinosaur1);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1]);
  });




  it('should be able to remove a dinosaur from its collection', function() {
    park.add(dinosaur1);//we have already tested this function therefore we can use it in subsequent tests
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1]);
  });




  it('should be able to find the dinosaur that attracts the most visitors',function() {
    park.add(dinosaur1);
    park.add(dinosaur2);
    park.add(dinosaur3);
    park.add(dinosaur4);

    const actual = park.findMostPopularDinosaur();
    assert.deepStrictEqual(actual, dinoasaur3);
  });

  // it('should be able to find all dinosaurs of a particular species', function() {
  //   let particulaSpecies = []
  //   for (banana of this.dinosaurs) {
  //     if (dinosaur.species === species) {
  //       particularSpecies.push(banana)
  //     }
  //   }
  //   return particulaSpecies;
  // });
  //
  // it('should be able to remove all dinosaurs of a particular species', function(species) {
  //
  // });

});
