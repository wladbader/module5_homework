//Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

let animals = new Map([
    ["pup", "white"],
    ["cat", "black"],
    ["snake", "green"],
]);

for (pair of animals) {
    console.log(`Ключ - ${pair[0]}, значение - ${pair[1]}`)
}
