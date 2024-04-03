//! task1
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//       console.log(i);
//   }
// }
// !task2
// let num = 12;
// if (num == 0) {
//   console.log(num, "Nə çüt ədəddir nədə tək.");
// } else if (num % 2 == 0) {
//   console.log(num, "cüt rəqəmdir.");
// } else {
//   console.log(num, "tək rəqəmdir.");
// }
//! task3
// let num = 100;
// let i = 1;
// while (num >= i) {
//   if (num % i == 0) {
//     console.log(i);
//   }
//   i++;
// }
//! task4
// let a = 2;
// let b = 10;
// let c = 6;
// if (
//   a ** 2 + b ** 2 == c ** 2 ||
//   a ** 2 + c ** 2 == b ** 2 ||
//   c ** 2 + b ** 2 == a ** 2
// ) {
//   console.log("düzbucaqlı üçbucaqdır.");
// } else {
//   console.log("düzbucaqlı üçbucaq deyil.");
// }
// !task5
// let num = 652;
// let str = String(num);
// let result = "Result: ";
// for (let i = 0; i < str.length; i++) {
//   result += str[i];
//   if (i !== str.length - 1) {
//     result += ",";
//   }
// }
// console.log(result);
//! task6
// let a = 2;
// let b = 3;
// let c = 3;
// if (a == b && b == c && a == c) {
//   console.log("Bərabər tərfli üçbucaqdır.");
// } else {
//   console.log("Bərabər tərəfli üçbucaq deyil.");
// }
//! task7
// let a = 5;
// let b = 3;
// let c = 1;
// if (a == b || b == c || a == c) {
//     if (a + b >= c && b + c >= a && a + c >= b) {
//       console.log("Bərabər yanlı üçbucaqdır.");
//   }
// } else {
//   console.log("Bərabər yanlı üçbucaq deyil.");
// }
//! task8
// let a = 3;
// let b = 4;
// let c = 5;
// if (a + b >= c && b + c >= a && a + c >= b) {
//     console.log("Üçbucaqın tərəfidir.");
// }
// else {
//     console.log("Üçbucaqın tərəfi deyil.");
// }
//! task9
// const moonth = "february";
// let lowerCasemoonthName = moonth.toLowerCase();
// switch (lowerCasemoonthName) {
//   case "january":
//     console.log("january has 31 days");
//     break;
//   case "february":
//     console.log("february has 29 days");
//     break;
//   case "march":
//     console.log("march has 31 days");
//     break;
//   case "april":
//     console.log("april has 30 days");
//     break;
//   case "may":
//     console.log("may has 31 days");
//     break;
//   case "june":
//     console.log("june has 30 days");
//     break;
//   case "july":
//     console.log("july has 31 days");
//     break;
//   case "august":
//     console.log("august has 31 days");
//     break;
//   case "september":
//     console.log("september has 30 days");
//     break;
//   case "october":
//     console.log("october has 31 days");
//     break;
//   case "november":
//     console.log("november has 30 days");
//     break;
//   case "december":
//     console.log("december has 31 days");
//     break;
//   default:
//     console.log("This is not moonth");
//     break;
// }
//! task10
let num = 179;

let firstNum = parseInt(num / 100);
let secondNum = parseInt(num % 100 / 10);
let lastNum = num % 10;


let minNum = Math.min(
  firstNum * 100 + secondNum * 10 + lastNum,
  firstNum * 100 + lastNum * 10 + secondNum,
  secondNum * 100 + firstNum * 10 + lastNum,
  secondNum * 100 + lastNum * 10 + firstNum,
  lastNum * 100 + firstNum * 10 + secondNum,
  lastNum * 100 + secondNum * 10 + firstNum
);

let maxNum = Math.max(
  firstNum * 100 + secondNum * 10 + lastNum,
  firstNum * 100 + lastNum * 10 + secondNum,
  secondNum * 100 + firstNum * 10 + lastNum,
  secondNum * 100 + lastNum * 10 + firstNum,
  lastNum * 100 + firstNum * 10 + secondNum,
  lastNum * 100 + secondNum * 10 + firstNum
);

console.log("Minimum ədəd:", minNum);
console.log("Maksimum ədəd:", maxNum);
