
const numbers = [10, 20, 30, 40, 50];


const getSum = (arr) => arr.reduce((total, num) => total + num, 0);

console.log("Sum of array:", getSum(numbers));
