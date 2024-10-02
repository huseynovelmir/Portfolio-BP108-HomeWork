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

// - boyfriend-i olan tələbələrin adlarını və username-lərini çapa verin
// - yaşı 20 olan tələbələrin adlarını və müəllim adlarını çapa verin
// - Bütün tələbələrə təqaüdlərinin dollar ilə görünməsini təmin edin
// - Müəllimlərin baş hərflərini böyük hərflə yazın
// - Şifrəsində rəqəm olmayan tələbələri tapın
// - Qızların arasında id-si 3 olan müəllimlərin adını deyin
// - Tələbələrin adlarını və müəllim saylarını çapa verin
// - Tələbələrin adlarını username və şifrələrindən ibarət yeni array yaradın [{name:qurban,username:qurban123,password:qqq123}]
// - Müəllimlərin adlarından sonra müəllim sözünü əlavə edin. String metod istifadə edin
// - Hamının şifrəsinin əvvəlinə 3 ədəd boşluq əlavə edin. String metod istifadə edin
// - Hamının şifrəsinin ilk 4 simvolu görsənsin yerdə qalanlar "*" ilə əvəz olunsun. String metod istifadə edin
// - Hamının soyadının uzunluğu adının uzunluğu qədər olsun. String metod istifadə edin
// - Bütün tələbələrin yaşlarının toplamı nə qədərdir
// - Bütün tələbələrin cəmi bal ortalaması nə qədərdir
// - "book" həvəsini olan tələbələrin siyahısını çap edin
// - Tələbələrin yaş ortalaması nədir?
// - Hər bir tələbə üçün cinsiyət və yaşı göstərən bir obyekt yaradin
// - Bütün tələbələrin ad və soyadlarının uzunluqlarının cəmi hansıdır
// - Tələbələrin adlarını tərsinə çevirin.
// - "gamig" həvəsi olan tələbələrin array-ini yaradın
// - Bütün tələbələrin hobbiləri olan array yaradın?

// !- Bütün elementləri konsola yazın

// console.log(students);
//! - Bütün tələbələrin adlarını konsola yazın - ad: Qurban
// for (let i = 0; i < students.length; i++) {
//   console.log(students[i].name);
// }
//! - Bütün tələbələrin adlarını və soyadlarını konsola yazın - ad: Qurban, soyad: Qurbanzada
// for (let i = 0; i < students.length; i++) {
//   console.log(`ad: ${students[i].name} soyad: ${students[i].surname}`);
// }
//! - Kəsri olan tələbələrin ad və soyadını çapa verin
// for (let i = 0; i < students.length; i++) {
//   if (students[i].fail == true) {
//     console.log(`ad: ${students[i].name} soyad: ${students[i].surname}`);
//   }
// }

//! - Ən çox hobbisi olan tələbənin ad və hobbilərini çapa verin
let max = 0;
for (let i = 0; i < students.length; i++) {
  let hobbies = students[i].hobbies.length;
  console.log(hobbies);
  if (hobbies > max) {
    max = hobbies;
    console.log(students[i].name);
  }
}
// for (let i = 0; i < students.length; i++) {
//   if (students[i].hobbies.length == max) {
//     console.log(students[i].name);
//   }
// }
//! ortalama
// let max = 0;
// for (let i = 0; i < students.length; i++) {
//   if (students[i].avgPoint > max) {
//     max = students[i].avgPoint;
//   }
// }
// for (let j = 0; j < students.length; j++) {
//   if (students[j].avgPoint == max) {
//     console.log(`ad: ${students[j].name} soyad: ${students[j].surname}`);
//   }
// }
//! - Parolu ən uzun olan tələbənin username və adını çapa verin
// let max = 0;
// for (let i = 0; i < students.length; i++) {
//   if (students[i].loginDetail.password.length > max) {
//     max = students[i].loginDetail.password.length;
//   }
// }

// for (let j = 0; j < students.length; j++) {
//   if (students[j].loginDetail.password.length == max) {
//     console.log(`ad: ${students[j].name} soyad: ${students[j].surname}`);
//   }
// }
//! yas
// let max = students[0].avgPoint;
// let box = "";
// for (let i = 0; i < students.length; i++) {
//   if (students[i].age == 20) {
//     for (let j = 0; j < students[i].teacher.length; j++) {
//       box += students[i].teacher[j].name + " ";
//     }
//     console.log(`ad: ${students[i].name} mualim: ${box}`);
//   }
// }

// for (let j = 0; j < students.length; j++) {
//   if (students[j].loginDetail.password.length == max) {
//     console.log(`ad: ${students[j].name} soyad: ${students[j].surname}`);
//   }
// }

//! - Bütün tələbələrə təqaüdlərinin dollar ilə görünməsini təmin edin
// for (let i = 0; i < students.length; i++) {
//   console.log(
//     students[i].salaryAZN,
//     "Manat",
//     (students[i].salaryAZN / 1.7).toFixed(1),
//     "$"
//   );
// }
//! - Müəllimlərin baş hərflərini böyük hərflə yazın
// for (let i = 0; i < students.length; i++) {
//   for (let j = 0; j < students[i].teacher.length; j++) {
//     console.log(
//       students[i].teacher[j].name.charAt(0).toUpperCase() +
//         students[i].teacher[j].name.slice(1)
//     );
//   }
// }
//! - Şifrəsində rəqəm olmayan tələbələri tapın
// let arr = [];
// for (let i = 0; i < students.length; i++) {
//   let obj = {};
//   //   console.log(students[i].loginDetail.password);
//   let pass = students[i].loginDetail.password;

//   for (let j = 0; j < pass.length; j++) {
//     // const element = array[j];
//     // console.log(pass[j], +pass[j]);
//     if (pass[j] == +pass[j]) {
//       //   console.log(pass[j]);
//       //   console.log(students[i].name);
//       obj.name = students[i].name;

//       obj.password = pass;
//       //   console.log(obj);
//       arr.push(obj);
//       break;
//     }
//   }
// }
// console.log(arr);
//! - Qızların arasında id-si 3 olan müəllimlərin adını deyin

// for (let i = 0; i < students.length; i++) {
//   if (students[i].gender == "girl") {
//     for (let j = 0; j < students[i].teacher.length; j++) {
//       if (students[i].teacher[j].id == 3) {
//         console.log(
//           "Tələbə:",
//           students[i].name,
//           "Müəllim:",
//           students[i].teacher[j].name
//         );
//       }
//     }
//   }
// }
//! - Tələbələrin adlarını və müəllim saylarını çapa verin
// for (let i = 0; i < students.length; i++) {
//   console.log(
//     "Tələbə:",
//     students[i].name,
//     "Müəllim sayı:",
//     students[i].teacher.length
//   );
// }
//! - Tələbələrin adlarını username və şifrələrindən ibarət yeni array yaradın [{name:qurban,username:qurban123,password:qqq123}]

// let newArr = students.map(({ id, name, loginDetail }) => ({
//   id,
//   name,
//   loginDetail,
// }));
// console.log(newArr);
// !Task 16 Müəllimlərin adlarından sonra müəllim sözünü əlavə edin. String metod istifadə edin
// students.map((student) => {
//   student.teacher.map((teacher) => {
//     console.log(teacher.name.concat(" Müəllim"));
//   });
// });
// ! Task 17 Hamının şifrəsinin əvvəlinə 3 ədəd boşluq əlavə edin. String metod istifadə edin
// students.forEach((student) => {
//   let newPassword = student.loginDetail.password.padStart(
//     student.loginDetail.password.length + 3,
//     " "
//   );
//   console.log(newPassword);
// });
// !Task 18 Hamının şifrəsinin ilk 4 simvolu görsənsin yerdə qalanlar "*" ilə əvəz olunsun. String metod istifadə edin
// students.forEach((student) => {
//   let newPassword = student.loginDetail.password;
//   const visiblePart = newPassword.substring(0, 4);
//   const hiddenPart = "*".repeat(newPassword.length - 4);
//   let result = visiblePart + hiddenPart;
//   console.log(result);
// });

// !Task 19 Hamının soyadının uzunluğu adının uzunluğu qədər olsun. String metod istifadə edin
// students.forEach((student) => {
//   let studentSurname = student.surname.slice(0, student.name.length);
//   console.log(student.name, studentSurname);
// });
// !TAsk 20  Bütün tələbələrin yaşlarının toplamı nə qədərdir
// let result = 0;
// students.forEach((student) => {
//   result += student.age;
// });
// console.log(result);

// !Task 21 Bütün tələbələrin cəmi bal ortalaması nə qədərdir
// let result = 0;
// students.forEach((student) => {
//   result += student.avgPoint;
// });
// console.log(Math.ceil(result / students.length));
//  !Task 22  "book" həvəsini olan tələbələrin siyahısını çap edin
// students.map((student) => {
//   if (student.hobbies.includes("book")) {
//     console.log(student.name);
//   }
// });
// !Task 23 Tələbələrin yaş ortalaması nədir?
// let result = 0;
// students.map((student) => {
//   result += student.age;
// });
// console.log(Math.ceil(result / students.length));
// !Task 24 Hər bir tələbə üçün cinsiyət və yaşı göstərən bir obyekt yaradin

// let arr = [];
// students.map((student) => {
//   let obj = {
//     name: student.name,
//     age: student.age,
//   };
//   arr.push(obj);
// });
// console.log(arr);

// !Task 25 Bütün tələbələrin ad və soyadlarının uzunluqlarının cəmi hansıdır
// let nameLength = 0;
// let surnameLength = 0;
// students.map((student) => {
//   nameLength += student.name.length;
//   surnameLength += student.surname.length;
// });
// console.log(nameLength + surnameLength);
// !Task 26 Tələbələrin adlarını tərsinə çevirin.

// students.map((student) => {
//   console.log(student.name.split("").reverse().join(""));
// });

// !Task 27 "gamig" həvəsi olan tələbələrin array-ini yaradın
// let studentArr = [];
// students.map((student) => {
//   if (student.hobbies.includes("gaming")) {
//     studentArr.push(student.name);
//   }
// });
// console.log(studentArr);

// !Task 28 Bütün tələbələrin hobbiləri olan array yaradın?
// let arr = [];
// students.map((student) => {
//   arr.push(student.hobbies);
// });
// console.log(arr);
