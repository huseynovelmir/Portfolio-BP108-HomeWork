const acc = document.getElementsByClassName("accordion");
let arr = Array.from(acc);
arr.forEach((el) => {
  el.addEventListener("click", myfunc);
  function myfunc() {
    if (el.nextElementSibling.style.display == "block") {
      el.nextElementSibling.style.display = "none";
    } else {
      el.nextElementSibling.style.display = "block";
    }
  }
});
