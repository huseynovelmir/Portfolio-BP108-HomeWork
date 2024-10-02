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
// !Task 1
// console.log(students);
// !Task 2
// students.map((item) => console.log(item.name));
// !Task 3
// students.map((item) => console.log("Name:",item.name,"Surname:",item.surname));
// !Task 4
// students.map((item) => {
//   if (item.fail == true) {
//     console.log("Name:", item.name, "Surname:", item.surname);
//   }
// });
// !Task 5
// let student = students[0];
// for (let i = 0; i < students.length; i++) {
//   if (students[i].hobbies.length > student.hobbies.length) {
//     student = students[i];
//   }
// }
// console.log("Adı:", student.name, "hobbiləri:", student.hobbies.join(","));
// !Task 6
// let student = students[0];
// for (let i = 0; i < students.length; i++) {
//   if (students[i].avgPoint > student.avgPoint) {
//     student = students[i];
//   }
// }

// console.log("Adı:", student.name, "Soyadı:", student.surname);
//  !Task 7
// let student = students[0];
// for (let i = 0; i < students.length; i++) {
//   if (
//     students[i].loginDetail.password.length >
//     student.loginDetail.password.length
//   ) {
//     student = students[i];
//   }
// }
// console.log(student.name);

// !Task 8
// students.map((student) => {
//   if (student.boyfriendGirlfriend == true) {
//     console.log(student.name);
//   }
// });
// !Task 9
// students.map((student) => {
//   if (student.age == 21) {
//     console.log(
//       "Name:",
//       student.name,
//       ",Teacher Name:",
//       student.teacher.map((teacher) => teacher.name).join(",")
//     );
//   }
// });
// !Task 10
// students.map((student) => {
//   let result = student.salaryAZN * 1.7;
//   console.log(Math.round(result), "$");
// });
// !Task 11
// students.forEach((student) => {
//   student.teacher.forEach((teacher) => {
//     console.log(
//       teacher.name.charAt(0).toUpperCase() + teacher.name.slice(1).toLowerCase()
//     );
//   });
// });

// !Task 12
// students.forEach((student) => {
//   if (!/\d/.test(student.loginDetail.password)) {
//     console.log(student.name);
//   }
// });
// !Task 13
// students.forEach((student) => {
//   if (student.gender == "girl") {
//     student.teacher.forEach((teacher) => {
//       if (teacher.id == 3) {
//         console.log(student.name);
//       }
//     });
//   }
// });
// ! Task 14
// students.forEach((student) => {
//   console.log(student.name, student.teacher.length);
// });

// ! Task 15
// let arr = students.map((student) => ({
//   name: student.name,
//   username: student.loginDetail.username,
//   password: student.loginDetail.password,
// }));

// console.log(arr)
// !Task 16
// students.map((student) => {
//   student.teacher.map((teacher) => {
//     console.log(teacher.name.concat(" Müəllim"));
//   });
// });
// ! Task 17
// students.forEach((student) => {
//   let newPassword = student.loginDetail.password.padStart(
//     student.loginDetail.password.length + 3,
//     " "
//   );
//   console.log(newPassword);
// });
// !Task 18
// students.forEach((student) => {
//   let newPassword = student.loginDetail.password;
//   const visiblePart = newPassword.substring(0, 4);
//   const hiddenPart = "*".repeat(newPassword.length - 4);
//   let result = visiblePart + hiddenPart;
//   console.log(result);
// });

// !Task 19
// students.forEach((student) => {
//   let studentSurname = student.surname.slice(0, student.name.length);
//   console.log(student.name, studentSurname);
// });
// !TAsk 20
// let result = 0;
// students.forEach((student) => {
//   result += student.age;
// });
// console.log(result);

// !Task 21
// let result = 0;
// students.forEach((student) => {
//   result += student.avgPoint;
// });
// console.log(Math.ceil(result / students.length));
//  !Task 22
// students.map((student) => {
//   if (student.hobbies.includes("book")) {
//     console.log(student.name);
//   }
// });
// !Task 23
// let result = 0;
// students.map((student) => {
//   result += student.age;
// });
// console.log(Math.ceil(result / students.length));
// !Task 24

// let arr = [];
// students.map((student) => {
//   let obj = {
//     name: student.name,
//     age: student.age,
//   };
//   arr.push(obj);
// });
// console.log(arr);

// !Task 25
// let nameLength = 0;
// let surnameLength = 0;
// students.map((student) => {
//   nameLength += student.name.length;
//   surnameLength += student.surname.length;
// });
// console.log(nameLength + surnameLength);
// !Task 26

// students.map((student) => {
//   console.log(student.name.split("").reverse().join(""));
// });

// !Task 27
// let studentArr = [];
// students.map((student) => {
//   if (student.hobbies.includes("gaming")) {
//     studentArr.push(student.name);
//   }
// });
// console.log(studentArr);

// !Task 28
// let arr = [];
// students.map((student) => {
//   arr.push(student.hobbies);
// });
// console.log(arr);
/* 
███████╗██████╗░██╗░░░██╗███████╗░█████╗░███████╗
██╔════╝██╔══██╗██║░░░██║██╔════╝██╔══██╗██╔════╝
█████╗░░██║░░██║██║░░░██║██████╗░██║░░██║█████╗░░
██╔══╝░░██║░░██║██║░░░██║╚════██╗██║░░██║██╔══╝░░
██║░░░░░██████╔╝╚██████╔╝██████╔╝╚█████╔╝███████╗
╚═╝░░░░░╚═════╝░░╚═════╝░╚═════╝░░╚════╝░╚══════╝
*/

//TODO: Hocam digər qalanlarını yazmam üçün mənə 1 gün əlavədən versəniz əla olar.
//TODO: Atam xaricdən gələcək deyə gecə 4 də gedib onu qarşılamalıyam.
//TODO: Günün yarsını kəsrləri bağlamaq üçün alt qruplarda keçirdim, digər yarsıda müəyyən problemlərdən dolayı yolda keçdim.
//TODO: Bilirəm bunlar yetərli səbəb deyil. Amma yenədə anlayışla qarşılasanız çox sevinərəm. Hər şey üçün təşəkkürlər.
