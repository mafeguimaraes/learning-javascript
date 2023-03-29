/* 

Exercício 16

Você deverá criar uma função javascript que recebe como parâmetro a data de nascimento de uma pessoa no formato string e mostre no terminal a idade dessa pessoa no dia atual, 
sua próxima data de aniversário no formato “DD/MM/AAAA” e quantos dias faltam para o próximo aniversário dela. Para isso, você deverá utilizar o módulo dayjs, disponível no npm.

*/
const dayjs = require("dayjs");

function birthday(date) {
  const birthday = dayjs(date);
  const today = dayjs();
  const ageInYears = today.diff(birthday, "year");
  const nextBirthday = birthday.add(ageInYears + 1, "year");
  const daysToNextBirthday = nextBirthday.diff(today, "day") + 1;

  console.log(`Idade: ${ageInYears}`);
  console.log(`Próximo aniversário: ${nextBirthday.format("DD/MM/YYYY")}`);
  console.log(
    `Dias até completar ${ageInYears + 1} anos: ${daysToNextBirthday}`
  );
}
birthday("2001-10-08");
