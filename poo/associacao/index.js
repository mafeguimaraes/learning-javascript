const Address = require("./Address");
const Person = require("./Person");

const addr = new Address("Wall Street", 89, "Centro", "Belo Horizonte", "MG");
const maria = new Person("Maria", addr);

console.log(maria);
console.log(maria.address.fullAddress());
