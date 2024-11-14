"use sctrict";

// Типы данных

let number = 4.6; // Числовой

    console.log(-4/0); // Ошибка -Infinity
    console.log('string' * 9); // Ошибка NaN ( Не число )

const persone = "Alex"; // Строка

    console.log(persone);

const bool = false; // boolean (Либо да либо нет, false,true )

    console.log(bool);

let und; // Значение undefined (Есть переменная но в ней пусто)

    console.log(und);

// Объект

const obj = {
    name: "John", // Ключ: Значение
    age: 25,
    isMarried: false
};

    console.log(obj.name);
    console.log(obj['age']);

// Массив хранение объектов по порядку

//              0           1       2       3       4   5    // Ключи автоматически подсталены
let arr = ['plum.png','orange.jpg', 6, 'apple.bmp', {}, []]; // Массив записывается Значение


    console.log(arr[0]);
