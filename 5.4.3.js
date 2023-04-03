function stringReverse(string) {
    let arr = string.split("").reverse().join("");
    return arr;
}

console.log(stringReverse("Hello"));