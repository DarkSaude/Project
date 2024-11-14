"use strict"; // Строгий режим всегда прописывать!!!

let number = 5; // Переменная изменяема
const leftBorderWidth = 1; // Переменная не изменяемая

number = 10;


console.log(number, leftBorderWidth);


const obj = {
    a: 50,
    b: 25,
    c:{
        a:55,
        b:33
    }
};

obj.c.a = 10;

console.log(obj);



