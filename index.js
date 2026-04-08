const nissan = require("./nissan.js");

const Benz = require("./Benz.js");
const Toyota = require("./toyota.js");
const Car = require("./Car.js");

//ploy
const benz1 = new Benz("C-Class Saloon", "Hybrid", 3190000);
benz1.infoWarranty();
const benz2 = new Benz("EQS Saloon", "Electrical", 5950000);
benz2.infoWarranty();
console.log("-------------------");

//Asha
const ae86 = new Toyota(
  "Toyota Trueno AE86",
  "Sport compact",
  "Fujiwara Takumi",
);

ae86.kanseiDrift();
ae86.typeCar();
console.log("-------------------");

//Sun

console.log("-------------------");

//Nike
const GTR = new nissan("Nissan GTR R35", "NIKE", "Super Car Killer");

GTR.SuperPower();
GTR.typeCar();

console.log("-------------------");

//Park

console.log("-------------------");

//Lin
