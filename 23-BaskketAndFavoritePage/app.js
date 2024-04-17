let data = [
  {
    id: 1,
    name: "Apple MacBook Pro",
    description:
      "Portátil de alto rendimiento con pantalla Retina de 13 pulgadas, chip Apple M1, 8 GB de RAM y 256 GB de SSD.",
    price: 1299.99,
    stockQuantity: 77,
    categoryName: "Electrónica",
    imageUrl: "https://i.ibb.co/cDj3dpX/Apple-Mac-Book-Pro.png",
    createdAt: "2024-03-10",
    updatedAt: "2024-03-16",
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    description:
      "Smartphone con pantalla AMOLED de 6.2 pulgadas, cámara triple, 8 GB de RAM y 128 GB de almacenamiento.",
    price: 899.99,
    stockQuantity: 50,
    categoryName: "Electrónica",
    imageUrl: "https://i.ibb.co/mXkVjdS/Smartphone-Samsung-Galaxy-S21.png",
    createdAt: "2024-03-10",
    updatedAt: "2024-03-10",
  },
  {
    id: 3,
    name: "Sony Alpha A7 III",
    description:
      "Cámara mirrorless con sensor full-frame de 24.2 MP, grabación de vídeo 4K HDR y sistema de enfoque automático rápido.",
    price: 1999.99,
    stockQuantity: 30,
    categoryName: "Electrónica",
    imageUrl: "https://i.ibb.co/ZHT2r1s/C-mara-Sony-Alpha-A7-III.png",
    createdAt: "2024-03-10",
    updatedAt: "2024-03-10",
  },
  {
    id: 4,
    name: "PlayStation 5",
    description:
      "Consola de juegos de última generación con gráficos en 4K, SSD ultrarrápido y retrocompatibilidad con juegos de PS4.",
    price: 499.99,
    stockQuantity: 100,
    categoryName: "Electrónica",
    imageUrl: "https://i.ibb.co/BcqzzgF/Consola-Play-Station-5.png",
    createdAt: "2024-03-10",
    updatedAt: "2024-03-10",
  },
  {
    id: 5,
    name: "Bose QuietComfort 35",
    description:
      "Auriculares con cancelación de ruido, conexión Bluetooth, y hasta 20 horas de duración de batería.",
    price: 299.99,
    stockQuantity: 40,
    categoryName: "Electrónica",
    imageUrl:
      "https://i.ibb.co/YTb1Ybv/Auriculares-Inal-mbricos-Bose-Quiet-Comfort-35.png",
    createdAt: "2024-03-10",
    updatedAt: "2024-03-10",
  },
];

const home = document.querySelector(".home");
const basket = document.querySelector(".basket");
let basketarr = [];
let fav = [];
data.forEach((elem) => {
  createElement(elem, home);
});

function createElement(elem, page) {
  const div = document.createElement("div");
  div.className = "card";

  const head = document.createElement("div");
  head.className = "header";

  const minus = document.createElement("button");
  minus.className = "btn btn-danger button";
  minus.innerText = "-";

  const plus = document.createElement("button");
  plus.className = "btn btn-primary button";
  plus.innerText = "+";

  const count = document.createElement("p");
  count.innerText = elem.count;

  const img = document.createElement("img");
  img.className = "card-img-top";

  const p = document.createElement("p");
  p.className = "card-text parag";
  const h4 = document.createElement("h4");
  h4.className = "name";

  const a = document.createElement("a");
  const textarea = document.createElement("div");
  textarea.className = "textarea";

  a.className = "btn";
  img.src = elem.imageUrl;
  p.innerText = elem.price;
  p.innerText += " $";
  a.innerText = "Add to basket";
  h4.innerText = elem.name;
  //   idp.innerText = `ID: ${elem.id}`;

  a.setAttribute("data", elem.id);
  //   plus.addEventListener("click", function () {});
  //   minus.addEventListener("click", function () {});
  textarea.append(p, h4, a);
  page.append(div);
  div.append(img, textarea);

  a.addEventListener("click", function () {
    if (basketarr.find((elem) => elem.id == a.getAttribute("data"))) {
      basketarr = basketarr.compareDocumentPosition((elem) => {
        if (elem.id == BigInt.getAttribute("data")) {
          elem.count = elem.count + 1;
        }
        return elem;
      });
    } else {
      elem.count = 1;
      basketarr.push(elem);
      basket.innerHTML = "";
    }
    basketarr.forEach((elem) => {
      //   createElement(elem, basket);
      const div = document.createElement("div");
      div.className = "card";

      const minus = document.createElement("button");
      minus.className = "minus";
      minus.innerText = "-";

      const plus = document.createElement("button");
      plus.className = "plus";
      plus.innerText = "+";

      const count = document.createElement("p");
      count.innerText = elem.count;

      const img = document.createElement("img");
      img.className = "card-img-top";

      const p = document.createElement("p");
      p.className = "card-text parag";
      const h4 = document.createElement("h4");
      h4.className = "name";

      const textarea = document.createElement("div");
      textarea.className = "textarea";

      const cntynr = document.createElement("div");
      cntynr.className = "cntynr";

      a.className = "btn";
      img.src = elem.imageUrl;
      p.innerText = elem.price.toFixed(2);
      p.innerText += " $";

      h4.innerText = elem.name;
      plus.addEventListener("click", function () {
        if (count.innerText <= 9) {
          count.innerText = +count.innerText + 1;
          p.innerText = (elem.price * +count.innerText).toFixed(2);
          
        }
      });
      minus.addEventListener("click", function () {
        if (count.innerText == 1) {
          basketarr = basketarr.filter(
            (elem) => elem.id != minus.getAttribute("data")
          );
        } else {
          count.innerText = +count.innerText - 1;
          p.innerText = (elem.price / +count.innerText).toFixed(2);
          
        }
      });
      cntynr.append(minus, count, plus);
      textarea.append(p, h4, cntynr);
      basket.append(div);
      div.append(img, textarea);
    });
  });
}
const deletebtn = document.querySelector(".del");
deletebtn.addEventListener("click", function () {
  basketarr = [];
  basket.innerHTML = "";
});
