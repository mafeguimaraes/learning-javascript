const media = (...numbers) => {
  const sum = numbers.reduce((accum, num) => accum + num, 0);
  return sum / numbers.length;
};
console.log(`Média Aritmética Simples: ${media(3, 6, 9, 10)} `);

const mediaPonderada = (...entries) => {
  const sum = entries.reduce(
    (accum, { num, peso }) => accum + num * (peso ?? 1),
    0
  );
  const pesos = entries.reduce((accum, entry) => accum + (entry.peso ?? 1), 0);
  return sum / pesos;
};
console.log(
  `Média Ponderada: ${mediaPonderada(
    { num: 9, peso: 3 },
    { num: 7, peso: 2 },
    { num: 10 }
  )}`
);

const mediana = (...numbers) => {
  const numerosOrdenados = [...numbers].sort((a, b) => a - b);
  const meio = Math.floor(numerosOrdenados.length / 2);

  if (numerosOrdenados.length % 2 !== 0) {
    return numerosOrdenados[meio];
  } else {
    const primeiro = numerosOrdenados[meio - 1];
    const segundo = numerosOrdenados[meio];
    return media(primeiro, segundo);
  }
};
console.log(`Mediana: ${mediana(2, 5, 99, 4, 42, 7)}`);
console.log(`Mediana: ${mediana(15, 14, 8, 7, 3)}`);

const moda = (...numbers) => {
  const quantidades = numbers.map((num) => [
    num,
    numbers.filter((n) => num == n).length,
  ]);
  quantidades.sort((a, b) => b[1] - a[1]);
  return quantidades[0][0];
};
console.log(`Moda: ${moda(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`);
