//! Task1
// let num = 2345;
// let str = String(num);
// console.log("Result:",str[0] * 1 + str[str.length - 1] * 1);
//! Task2
// let num = 2821;
// let str = String(num);
// let odd = 0;
// let even = 0;
// for (let i = 0; i < str.length; i++) {
//   if (i % 2 == 0) {
//     even += str[i] * 1;
//   }
//   if (i % 2 == 1) {
//     odd += str[i] * 1;
//   }
// }
// console.log(odd * even);
// !Task3
let length = 4;
let arr = [-1, 1, 5, 2, 3, -4];
for (let i = 0; i < length; i++) {
  if (arr[i] > 0) {
    arr[i] += 2;
  }
}
console.log(arr);
// !Task4
// let length = 5;
// let arr = [1, 5, 2, 6, 3];
// let max = 0;

// for (let i = 0; i < length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// arr.splice(arr.indexOf(max), 1);
// let secondMax = Math.max(...arr);
// console.log(max + secondMax);

// !Task5
// let arr = [6, 2, 7, 1, 7, 1, 7, 1, 2];
// let max = Math.max(...arr);
// let min = Math.min(...arr);
// let filteredArr = arr.filter((num) => num !== max && num !== min);
// let count = 0;
// for (let i = 0; i < filteredArr.length; i++) {
//   count += filteredArr[i];
// }
// console.log(count);
