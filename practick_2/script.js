"use strict";

// Практика по Условиям if else


if (4 == 4){
    console.log('Ok');
}
else{
    console.log('Error');
}

const num = 50;

if(num < 49){
    console.log('Error');
} else if (num > 100) {
    console.log('Слишком много');
} else {
    console.log('Ok');
}

// Тернарный оператор

( num == 51 )? console.log('Ok') : console.log('Error');

// switch Всегда строгое сравнение

const numm = 50;

switch (numm){
    case 49:
        console.log("Неверно");
        break;
    case 100:
        console.log("Неверно");
        break;
    case 50:
        console.log("В точку");
        break;
    default:
        console.log("Ни в этот раз");
        break;
}

