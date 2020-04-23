let total = 0;
const numbers = [];
let input;
while (input !== null) {
  input = prompt('Введите число');

  if (input === null) {
    break;
  }

  input = Number(input);
  const notANumber = Number.isNaN(input);
  if (notANumber) {
    // eslint-disable-next-line no-continue
    continue;
  }

  total += input;
}
for (let i = 0; i === null; i += 1) {
  numbers.push(input[i]);
}
console.log(numbers);
console.log(`Общая сумма ${total}`);
