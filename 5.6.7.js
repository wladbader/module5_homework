let arr = [1, 1, 4, 7, 4, 3, null, 'abc', 14, 0];
let countEven = 0, countOdd = 0, countZero = 0;
arr.map(
    item => {
        if (+item == 0) {
            countZero += 1;
        } else if (+item % 2 == 0) {
            countEven += 1;
        } else {
            countOdd += 1;
        }
    }
);

console.log(`
Количество четных: ${countEven}
Количество нечетных: ${countOdd}
Количество нулевых: ${countZero}
`);
