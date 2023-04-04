//Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".

function stringReverse(string) {
    let arr = string.split("").reverse().join("");
    return arr;
}

console.log(stringReverse("Hello"));
