const number = [1, 3, 5];
const result = number.some((num) => num % 2 === 0);
// console.log(result);
const cusersRoll = ["user", "editor"];
const featur = ["admin", "manager"];
const canAccess = cusersRoll.some((roll) => featur.includes(roll));

// console.log(canAccess);
// const arr = Array.from({ length: 5 }, (_, i) => i);
const arr = Array.from([1, 2, 3], (value, i) => value * value);
// console.log(arr);
const range = (start, stop, step) =>
  Array.from(
    { length: Math.ceil((stop - start) / step) },
    (value, i) => start + i * step
  );
console.log(range(0, 11, 4));
