let num = getRandomInt(0, 100);
console.log(num);

function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}