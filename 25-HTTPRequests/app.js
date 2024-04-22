const fetchProducts = async () => {
  const promise = await fetch("https://northwind.vercel.app/api/suppliers");
  const data = await promise.json();
  return data;
};

fetchProducts().then((data) => {
  const form = document.querySelector(".form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    //! inputs
    let compname = document.querySelector(".compname").value;
    let contName = document.querySelector(".conttName").value;
    let conttitle = document.querySelector(".conttitle").value;
    let addrstreet = document.querySelector(".addrstreet").value;
    let addrcity = document.querySelector(".addrcity").value;
    let addrregion = document.querySelector(".addrregion").value;
    let addrcountry = document.querySelector(".addrcountry").value;
    let addrpostalcode = document.querySelector(".addrpostalcode").value;
    let addrphone = document.querySelector(".addrphone").value;
    console.log(compname);

    let obj = {
      companyName: compname,
      contactName: contName,
      contactTitle: conttitle,
      address: {
        city: addrcity,
        country: addrcountry,
        phone: addrphone,
        region: addrregion,
        postalCode: addrpostalcode,
        street: addrstreet,
      },
    };
    fetch("https://northwind.vercel.app/api/suppliers", {
      method: "Post",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json;",
      },
    });
    window.reload();
  });

  const cards = document.querySelector(".cards");
  data.map((item) => {
    const card = document.createElement("div");

    card.className = "card";
    const companyName = document.createElement("p");
    const contactName = document.createElement("p");
    const contactTitle = document.createElement("p");
    const adressStreet = document.createElement("p");
    const adresssCity = document.createElement("p");
    const adresssRegion = document.createElement("p");
    const adresssCountry = document.createElement("p");
    const adresssPostalCode = document.createElement("p");
    const adresssPhone = document.createElement("p");
    const deletebtn = document.createElement("button");

    deletebtn.innerText = "Delete";
    companyName.innerText = item?.companyName;
    contactName.innerText = item?.contactName;
    contactTitle.innerText = item?.contactTitle;
    adressStreet.innerText = item.address?.street;
    adresssCity.innerText = item.address?.city;
    adresssRegion.innerText = item.address?.region;
    adresssCountry.innerText = item.address?.country;
    adresssPostalCode.innerText = item.address?.postalCode;
    adresssPhone.innerText = item.address?.phone;

    card.append(
      companyName,
      contactName,
      contactTitle,
      adressStreet,
      adresssCity,
      adresssRegion,
      adresssCountry,
      adresssPostalCode,
      adresssPhone,
      deletebtn
    );

    cards.append(card);
    deletebtn.setAttribute("data", item.id);
    deletebtn.addEventListener("click", function (e) {
      e.target.parentElement.remove();
      fetch(
        "https://northwind.vercel.app/api/suppliers/" +
          e.target.getAttribute("data"),
        {
          method: "DELETE",
        }
      );
    });
  });
});
