"use strict";

console.log('arr' + ' - ' + 'object');
console.log(4 + +"5"); // Унарный +

// Операторы Инкримент и Дикремент

let incr = 10, // Инкримент увеличивает на еденицу
    decr = 10; // Декримент уменьшает на еденицу

// incr++;
// decr--;


console.log(incr++);
console.log(--decr); // Посфиксная форма

console.log(5 % 2); // Процент делает остаток от деления

console.log(2 * 4 == '8'); 
console.log(2 + 2 * 4 === '8');
console.log(2 + 2 * 4 != 8);
console.log(2 * 4 === '8'); // Строгает сравнение ( сравнивает по типу данных и значению )

// Оператор && - И
// Оператор || - или

const isChecked = false,
      isClose = false;

console.log(isChecked && isClose);
console.log(isChecked || isClose);
console.log(isChecked || !isClose);