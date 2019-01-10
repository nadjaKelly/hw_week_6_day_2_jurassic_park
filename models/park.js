const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];
}



Park.prototype.add = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};



Park.prototype.remove = function(dinosaur) {
const index  = this.dinosaurs.indexof(dinosaur);
  this.dinosaurs.splice(index, 1);
};

Park.prototype.findMostPopularDinosaur = function () {
  let mostPopularDino = this.dinosaurs[0];

  for (const dino of this.dinosaurs) {
    if (dino.guestsAttractedPerDay > mostPopularDino.guestsAttractedPerDay) {
      mostPopularDino = dino;
    }
  }
  return mostAttractiveDino
}








module.exports = Park;
