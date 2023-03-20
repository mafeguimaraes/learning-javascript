// Template Literals
const nome = "Maria";
console.log(`Olá, ${nome}!
Estamos em ${Date()}`);

// Arrow Functions
function normalSum(a, b) {
  return a + b;
}

console.log(`Soma normal: ${normalSum(2, 2)}`);

const anonymousSum = function (a, b) {
  return a + b;
};

console.log(`Soma anônima: ${anonymousSum(2, 2)}`);

const arrowSum = (a, b) => {
  return a + b;
};

console.log(`Soma arrow function: ${arrowSum(2, 2)}`);

const subtract = (a, b) => a - b;

console.log(`Subtração arrow function: ${subtract(4, 2)}`);

const double = (n) => `O dobro de ${n} é ${n * 2}`;

const number = 20;

console.log(double(number));

const towns = ["Prontera", "Izlude", "Payon", "Alberta", "Geffen", "Morroc"];

const startingWithP = towns.filter((town) => town[0] === "P");

console.log(startingWithP);

// Desestruturação de objetos e arrays
const person = {
  name: "Taylor",
  job: "Singer",
  parents: ["Andrea", "Scott"],
};

const name = person.name;
const { job, parents } = person;
console.log(name, job, parents);

const [mother, father] = parents;
console.log(`Mãe: ${mother}, Pai: ${father}`);

// Operator Spread
console.log(...towns);
console.log(...towns[0]);

// referencia -> também vai alterar o original
const townsCopy = towns;

townsCopy.pop();
townsCopy.pop();
townsCopy.push("Juno");

console.log({ towns, townsCopy });

const townsClone = [...towns];

townsClone.push("Miami");

console.log({ towns, townsCopy, townsClone });

const townsObj = { ...towns };
const townsObjClone = { ...townsObj };

townsObjClone.test = "Test";

console.log({ townsObj, townsObjClone });

// Rest params, sempre usado no final das funções(ultimo parâmetro)

function sum(...numbers) {
  return numbers.reduce((accum, num) => accum + num, 0); // 0 = valor inicial de accum
}
console.log(sum(1, 1));
console.log(sum(2, 5, 7, 8, 3));

// Encadeamento opcional

const user = {
  name: "John Doe",
  email: "doejohn@email.com",
  friends: [
    {
      name: "Mary",
      address: {
        street: "Some Street",
        number: 89,
      },
    },
  ],
  age: 42,
  phone: {
    countryCode: "+55",
    ddd: "31",
    number: "998765432",
  },
};

// console.log(user.friends[0].phone.ddd); --> Erro porque tenta ler uma propriedade 'ddd' de algo undefined('phone')
console.log(user?.friends[0]?.phone?.ddd);
console.log(user?.friends?.[5]?.name);

// Operador de Coalescência Nula

const a = 0; //false
const b = null; // false
const c = "Teste"; // true

console.log(a || b || c);
console.log(a ?? b ?? c);

let d = 0;
let e = d || 4;
console.log({ d, e });
e = d ?? 4;
console.log({ d, e });
