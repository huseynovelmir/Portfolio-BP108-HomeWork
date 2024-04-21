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
    const compname = document.querySelector(".compname").value;
    // const contName = document.querySelector(".contName").value;
    // const conttitle = document.querySelector(".conttitle").value;
    // const addrstreet = document.querySelector(".addrstreet").value;
    // const addrcity = document.querySelector(".addrcity").value;
    // const addrregion = document.querySelector(".addrregion").value;
    // const addrcountry = document.querySelector(".addrcountry").value;
    // const addrpostalcode = document.querySelector(".addrpostalcode").value;
    // const addrphone = document.querySelector(".addrphone").value;

    fetch("https://northwind.vercel.app/api/suppliers", {
      method: "POST ",
      body: JSON.stringify({
        companyName: compname,
        // contactName: contName,
        // contactTitle: conttitle,
        // addrstreet: addrstreet.value,
        // addrcity: addrcity.value,
        // addrregion: addrregion.value,
        // addrcountry: addrcountry.value,
        // addrpostalcode: addrpostalcode.value,
        // addrphone: addrphone.value,
      }),
      headers: {
        "Content-Type": "application/json;",
      },
    });
  });
  const forel = document.querySelector("form");
  console.log(forel);

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

    //! inputs
    const compname = document.querySelector(".compname");
    const contName = document.querySelector(".contName");
    const conttitle = document.querySelector(".conttitle");
    const addrstreet = document.querySelector(".addrstreet");
    const addrcity = document.querySelector(".addrcity");
    const addrregion = document.querySelector(".addrregion");
    const addrcountry = document.querySelector(".addrcountry");
    const addrpostalcode = document.querySelector(".addrpostalcode");
    const addrphone = document.querySelector(".addrphone");

    deletebtn.innerText = "Delete";
    companyName.innerText = item.companyName;
    contactName.innerText = item.contactName;
    contactTitle.innerText = item.contactTitle;
    adressStreet.innerText = item.address.street;
    adresssCity.innerText = item.address.city;
    adresssRegion.innerText = item.address.region;
    adresssCountry.innerText = item.address.country;
    adresssPostalCode.innerText = item.address.postalCode;
    adresssPhone.innerText = item.address.phone;

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
