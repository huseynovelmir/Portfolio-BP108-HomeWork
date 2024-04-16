const form = document.querySelector("form");
const input = document.querySelector("input");
const container = document.querySelector(".container");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!input.value) return;

  const listgroup = document.createElement("div");
  listgroup.classList.add("list-group");

  const a = document.createElement("a");
  a.classList.add("list-group-item");
  a.classList.add("list-group-item-action");

  const contentdiv = document.createElement("div");
  contentdiv.classList.add("d-flex");
  contentdiv.classList.add("w-100");
  contentdiv.classList.add("justify-content-between");

  const h5 = document.createElement("h5");
  h5.innerText = input.value;
  h5.classList.add("mb-1");
  const div = document.createElement("div");

  const editbtn = document.createElement("button");
  editbtn.classList.add("btn");
  editbtn.classList.add("btn-primary");
  editbtn.innerText = "Edit";

  const deletebtn = document.createElement("button");
  deletebtn.classList.add("btn");
  deletebtn.classList.add("btn-danger");
  deletebtn.innerText = "Delete";

  const date = document.createElement("small");
  date.classList.add("text-body-secondary");
  container.append(listgroup);
  listgroup.append(a);
  a.append(contentdiv);
  contentdiv.append(h5, div);
  div.append(editbtn, deletebtn, date);

  input.value = "";

  deletebtn.addEventListener("click", function () {
    this.parentElement.parentElement.parentElement.remove();
  });

  editbtn.addEventListener("click", function () {
    let edit = this.parentElement.parentElement.firstChild;
    let input = document.createElement("input");
    input.type = "text";
    input.value = edit.replaceWith(input);
    editbtn.textContent = "save";
  });
});
