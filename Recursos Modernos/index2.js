// Módulos CommonJS

// const render = require("./render");
// const store = require("./store");

console.log("Aplicação iniciada.");
// render();
// store();
console.log("Aplicação finalizada.");

// ES Modules
import { name, label, input, br } from "./functions.js";

console.log(name);
console.log(label({ for: "fullname", textContent: "Nome Completo" }));
console.log(
  input({
    id: "fullname",
    name: "fullname",
    placeholder: "Digite seu nome completo...",
  })
);
console.log(br());
