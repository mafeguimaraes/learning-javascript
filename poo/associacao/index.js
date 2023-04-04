const Address = require("./Address");
const Person = require("./Person");

const addr = new Address("Wall Street", 89, "Centro", "Belo Horizonte", "MG");
const maria = new Person("Maria", addr);

console.log(maria);
console.log(maria.address.fullAddress());

const Author = require("./Author");

const taylor = new Author("Taylor");

const post = taylor.writePost(
  "Título do Post",
  "Lorem ipsum dolor sic amet ..."
);

post.addComment("Maria", "Muito bom!");
post.addComment("Fernanda", "Achei interessante.");

console.log(taylor);
console.log(post);
