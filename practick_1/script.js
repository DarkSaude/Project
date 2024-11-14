"use strics";

// Переменная ответов

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", ""),
    a = prompt("Один из последних просмотренных фильмов?"),
    b = +prompt("На сколько оцените его?");

const personalMovieDB = {
    "counst": numberOfFilms,
    "movies": {},
    "actors": {},
    "genres": [],
    "privat": false
};

personalMovieDB.movies[a] = b;

console.log(numberOfFilms);
console.log(personalMovieDB);



