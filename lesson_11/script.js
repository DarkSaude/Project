"use sctrict";

// Отличие массива от объекта

// Массив это значение которые идут по порядку.
const arr = ['a','b','c'];

arr[10] = '3456';

const arrObj = {
    0: 'a',
    1: 'b',
    'kell': 'c',
    'abc':{
        'df':[{},{}],
        'def': {

        },
    },
};

const b = 'y';

// arrObj.b = '1234';
arrObj['b'] = '123456789';


console.log(arr);
console.log(arr[1]);
console.log(arr[10]);
console.log(arrObj);
console.log(arrObj['b']);
console.log(arrObj.b);

// Объект всегда идет парой КЛЮЧ + ЗНАЧЕНИЕ
// const obj = {a: 1, b: 2};

const obj = {
    Anna: 500,
   'Alice': 800
};

console.log(obj);

const storeName = 'Grend';
const storeDescription ={
    'budget': 10000,
    'employees': ['Anna','Smit','Dimon'],
    'products':{
        'apple': 45,
        'berd': 55
    },
    'open': true
};

console.log(storeDescription);