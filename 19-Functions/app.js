let students = [
  {
    id: 1,
    name: "Nurane",
    surname: "Ismayilzade",
    age: 21,
    hobbies: ["music", "walking", "watchingfilm"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "cavid" },
      { id: 4, name: "alisa" },
    ],
    loginDetail: { username: "nurana21", password: "nunu123" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 80,
    salaryAZN: 144,
  },
  {
    id: 2,
    name: "Gizilgul",
    surname: "Allahverdiyeva",
    age: 20,
    hobbies: ["book", "writing code"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "babaxan" },
      { id: 4, name: "gulshen" },
    ],
    loginDetail: { username: "allahverdieva1", password: "salam123" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 70,
    salaryAZN: 100,
  },
  {
    id: 3,
    name: "Xanim",
    surname: "Nuriyeva",
    age: 21,
    hobbies: ["book", "music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "hikmet" },
      { id: 4, name: "gulsen" },
    ],
    loginDetail: { username: "xanim123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 80,
    salaryAZN: 145,
  },
  {
    id: 4,
    name: "Minaya",
    surname: "Binnetova",
    age: 21,
    hobbies: ["book", "gaming", "movie", "music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "anar" },
    ],
    loginDetail: { username: "binnetova", password: "hello123" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 90,
    salaryAZN: 142,
  },
  {
    id: 5,
    name: "Sabina",
    surname: "Hatamli",
    age: 21,
    hobbies: ["shopping", "listen to music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Mirvari" },
    ],
    loginDetail: { username: "sebine123", password: "salam123" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 81,
    salaryAZN: 146,
  },

  {
    id: 6,
    name: "Ləman",
    surname: "Şamilova",
    age: 20,
    hobbies: [
      "watching movies",
      "reading books",
      "painting",
      " walking",
      " listen to music",
    ],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
    ],
    loginDetail: { username: "lemanshamilova", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 85.8,
    salaryAZN: 145,
  },
  {
    id: 7,
    name: "Narmin",
    surname: "Musayeva",
    age: 21,
    hobbies: ["book", "gaming", "painting", "walking"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "fidan" },
      { id: 4, name: "Irada" },
    ],
    loginDetail: {
      username: "narmin0",
      password: "narmin01",
    },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 80,
    salaryAZN: 196,
  },

  {
    id: 8,
    name: "Fatima",
    surname: "Akhundzada",
    age: 20,
    hobbies: ["drawing", "sleeping"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Valida" },
    ],
    loginDetail: { username: "aynur123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 76,
    salaryAZN: 100,
  },
  {
    id: 9,
    name: "Elmir",
    surname: "Huseynov",
    age: 21,
    hobbies: ["book", "ice skating", "Tennis", "Karting"],
    student: true,
    teacher: [
      { id: 1, name: "Gurban" },
      { id: 2, name: "Hajar" },
      { id: 3, name: "Morad" },
      { id: 4, name: "Fikrat" },
    ],
    loginDetail: { username: "huseynovelmirr", password: "maxverstappen" },
    gender: "man",
    boyfriendGirlfriend: false,
    fail: true,
    avgPoint: 76,
    salaryAZN: 120,
  },
  {
    id: 10,
    name: "Fidan",
    surname: "Rehimli",
    age: 21,
    hobbies: ["book", "gaming"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Turan" },
    ],
    loginDetail: { username: "fidan123", password: "fidanrahimli" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: true,
    avgPoint: 75,
    salaryAZN: 98,
  },
  {
    id: 11,
    name: "Aynur",
    surname: "Aynurova",
    age: 20,
    hobbies: ["book", "gaming"],
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
    ],
    loginDetail: { username: "aynur123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: true,
    avgPoint: 81,
    salaryAZN: 120,
  },

  {
    id: 12,
    name: "Elman",
    surname: "Muradov",
    age: 20,
    hobbies: [
      "book",
      "gaming",
      "sking",
      "wrestling",
      "swiming",
      "arguing about philosophy",
      "solving sudoku",
      "hiking",
      "walking",
    ],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "jale" },
      { id: 4, name: "akhmed" },
    ],
    loginDetail: { username: "elman17", password: "elman12345" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: true,
    avgPoint: 76,
    salaryAZN: 100,
  },
];

//! 1- 2 ədədin cəmini tapan funskiya yazın. Ədədlər parametr olaraq verilməlidir.
// function addition(a, b) {
//   return a + b;
// }
// console.log(addition(12, 24));
// !2- 2 ədədin hasili tapan funskiya yazın. Ədədlər parametr olaraq verilməlidir.
// function multiplication(a, b) {
//   return a * b;
// }
// console.log(multiplication(2, 3));
// !3- 2 ədədin bütün riyazi əməlləri(+ - * /) yerinə yetirə bilən funksiya yazın. Funksiya ədədləri və əməliyyatı parametr olaraq qəbul etməldir.
// function actions(a, b, action = "addition") {
//   if (action == "multiplication") {
//     return a * b;
//   } else if (action == "subtraction") {
//     return a - b;
//   } else if (action == "addition") {
//     return a + b;
//   } else if (action == "division") {
//     return a / b;
//   } else {
//     return [
//       "Sonuncu parametir düzgün daxil edilməyib, Daxil etdiyinizin ingiliscə olub olmamasına və düzgün yazılmasına diqqət edin!",
//     ];
//   }
// }
// console.log(actions(2, 3, "subtractioon"));
// !4- Parametr olaraq daxil edilən 2 ədəddən hansının böyük olduğunu return edən funksiya yazın
// function comparison(a, b) {
//   if (a > b) {
//     return "Birinci ədəd ikincidən böyükdür";
//   } else if (a < b) {
//     return "İkinci ədəd birincidən böyükdür";
//   } else if (a === b) {
//     return "Ədədlər bir birinə bərabərdir";
//   } else {
//     return "Parametir düzgün daxil edilməyib";
//   }
// }
// console.log(comparison(5, 4));
// !5-  Elə bir funksiya yazın ki, hansı uzunluqda string parametr olaraq verilsə uzunluğunu 5 simvol etsin.
// function strings(str) {
//   return str.slice(0, 5);
// }
// console.log(strings("Hello World"));
// !6-  Elə bir funksiya yazın ki, hansı uzunluqda string parametr olaraq verilsə uzunluğunu 5 simvol etsin. Əgər 5 simvoldan kiçik olarsa sözü * ilə tamamlasın
// function strings(str) {
//   if (str.length > 5) {
//     return str.slice(0, 5);
//   } else {
//     return str + "*".repeat(5 - str.length);
//   }
// }
// console.log(strings(""));
// !7- Parametr olaraq qəbul edilən arrayın elementləri cəmini hesablayan funksiya yazın.
// let sum = 0;
// function arrays(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(arrays([1, 2, 11, 25, 25]));
// !8- Parametr olaraq qəbul edilən arrayın yalnız rəqəm olan elementləri cəmini hesablayan funksiya yazın.
// let sum = 0;
// function arrays(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }
// console.log(arrays(["salam", "nec", 3]));
// *update
// function nums(arr) {
//   return arr.reduce((acc, item) => (typeof item === "number" ? acc + item : acc),0);
// }
// console.log(nums(["salam", "necesen", 3, 4, 5, "hello"]));
// !9- Parametr olaraq qəbul edilən array-in elementlərini tərsinə düzən funksiya yazın.
// function arrays(arr) {
//   return arr.reverse();
// }
// console.log(arrays([1, 2, 3, 4, 5]));

//! or
// let array = [];
// function arrays(arr) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     array.push(arr[i]);
//   }
//   return array;
// }
// console.log(arrays(["salam", "necesen", 1, 2, 4, null]));
// !10- Parametr olaraq söz qəbul edən və sözü tərsinə yazan funksiya yazın.
// function strings(str) {
//   return str.split("").reverse().join("");
// }
// console.log(strings("salam"));
// !11- Parametr olaraq bir aaray və bir dəyişən qəbul edən, geriyə bu dəyişəni arrayın 3-cü elementi edib qaytaran funksiya yazın
// function arrays(arr, param) {
//   arr.splice(2,0, param);
//   return arr;
// }
// console.log(arrays([1, 2, 4, 5], 3));
// !12- Parametr olaraq rəqəmlərdən ibarət array qəbul edən və geriyə ancaq müsbət ədədlərdən ibarət array qaytaran funksiya yazın.
// let newArr = [];
// function arrays(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// console.log(arrays([1, 2, 3, 4, 5]));

//* update
// function numbers(arr) {
//   return arr.filter((item) => item > 0);
// }
// console.log(numbers([1, -2, 3, -4, 5, 6, -4, 7, 8, 9, -10]));

// !13- Parametr olaraq sözlərdən ibarət array qəbul edən və ancaq uzunluğu 5 dən çox olan sözləri qaytaran funksiya yazın.
// let newArr = [];
// function arrays(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > 5) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// console.log(arrays(["salam", "necesen"]));
//* update
// function strings(arr) {
//   return arr.filter((item) => item.length > 5);
// }
// console.log(
//   strings(["salam", "code academy", "xoxo", "Baku Azerbaijan", "code"])
// );

//! Proqram ikirəqəmli ədədi oxuyur və ədədin hər bir rəqəmini arada boşluq olmaqla ekrana verir.
// function numbers(a) {
//   let first = parseInt(a / 10);
//   let second = a % 10;
//   return first + " " + second;
// }
// console.log(numbers(23));
//* update
// function nums(a) {
//   let newNum = a.toString().split("");
//   return newNum[0] + " " + newNum[1];
// }
// console.log(nums(12));
// !Üçrəqəmli ədədi orta rəqəmi olmadan yazmalı.
// function numbers(a) {
//   let first = parseInt(a / 100);
//   let second = a % 10;
//   return first + " " + second;
// }

// console.log(numbers(234));
//* update
// function nums(a) {
//   let newNum = a.toString().split("");
//   return newNum[0] + newNum[2];
// }
// console.log(nums(123));
// !n məktəbli k almanı bərabər bölüşdürdülər, bölünməyən qalanlar sabətdə qalır. Səbətdə neçə alma qalacaq?
// function apples(apple, students) {
//   return parseInt(apple % students);
// }
// console.log(apples(24, 11));
// !Düzbucaqlının perimetrini hesablayın.
// function rectangle(a, b) {
//   return (a + b) * 2;
// }
// console.log(rectangle(4, 3));
// ! a və b ədədlərinin hasilini tapın.
// function multiplication(a, b) {
//   return a * b;
// }
// console.log(multiplication(65536, 216));
// !a və n natural ədədləri verilir. a**n -in qiymətini hesablayın.
// function square(a, n) {
//   return a ** n;
// }
// console.log(square(2, 10));
// !Natural n ədədi verilmişdir. n ədədinin axırınci rəqəmini (təkli rəqəmini) silin.
// function numb(number) {
//   return Math.floor(number / 10);
// }
// console.log(numb(12345));
//! Girişdə n natural ədədi verilir. Bu ədədin sağdan birinci rəqəmini tapmaq tələb olunur.
// function numb(number) {
//   return Math.floor(number % 10);
// }
// console.log(numb(12345));
// !Verilmiş dördrəqəmli natural ədədini tərsinə çevirin.
//? Bunu bilirəm bölmə əməliyyatları ilə yazmalıyam amma bunaldım dskjfnskjdfn
// function numb(number) {
//   let str = String(number);
//   return str.split("").reverse().join("") * 1;
// }
// console.log(numb(12345));

// !- Bütün elementləri konsola yazın

// function student() {
//   return console.log(students);
// }
// console.log(student());

//! - Bütün tələbələrin adlarını konsola yazın - ad: Qurban
// function student() {
//   for (let i = 0; i < students.length; i++) {
//     console.log(students[i].name);
//   }
// }
// student();
