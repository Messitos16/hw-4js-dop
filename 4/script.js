let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let maxNumber = Math.max.apply(null, numbers);
let minNumber = Math.min.apply(null, numbers);

console.log("Самое большое число: " + maxNumber);
console.log("Самое маленькое число: " + minNumber);
