//Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.

let num = getRandomInt(0, 100);
console.log(num);

function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}
