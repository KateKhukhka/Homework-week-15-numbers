//массив чисел от -10 до 10
const numbers = [];

//массив положительных чисел из numbers
const positiveNumbers = [];

//массив положительных чисел, возведенных в квадрат
const squareNumbers = [];

//формирование массивов numbers и positiveNumbers
let number;
for (number = -10; number < 11; number++) {
  numbers.push(number);
  if (number > 0) {
    positiveNumbers.push(number);
  }
}

//возведение значений массива positiveNumbers в квадрат, формирование массива squareNumbers
for (let number of positiveNumbers) {
  let squareNumber = number * number;
  squareNumbers.push(squareNumber);
}

//сортировка массива squareNumbers от большего значения к меньшему
for (let i = 0; i < squareNumbers.length; i++) {
  for (let j = 0; j < squareNumbers.length - 1; j++) {
    if (squareNumbers[j] < squareNumbers[j + 1]) {
      [squareNumbers[j + 1], squareNumbers[j]] = [
        squareNumbers[j],
        squareNumbers[j + 1],
      ];
    }
  }
}

//вариант сортировки с помощью метода sort:
//squareNumbers.sort(function (a, b) {
//  return b - a;
//});

console.log(numbers);
console.log(positiveNumbers);
console.log(squareNumbers);
