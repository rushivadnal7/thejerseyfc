const priceElement = document.getElementById("price");
const jerseyQuantity = document.getElementById("jerQuantity");

let currentPrice = 350;

jerseyQuantity.addEventListener("change", e => {
    const quantity = +e.target.value;
    console.log(quantity);
    currentPrice = 350 * quantity
    priceElement.textContent = `₹${currentPrice} `;
});


document.querySelector("#buybtn").addEventListener("click", e => {
    if (!localStorage.getItem("mysite")) {
        localStorage.setItem("mysite", JSON.stringify({}));
    }
    const obj = JSON.parse(localStorage.getItem("mysite"));
    obj.clubName = clubName.textContent;
    obj.quantity = jerseyQuantity.value;
    obj.size = sizeselect.value;
    obj.finalprice = currentPrice;
    localStorage.setItem("mysite", JSON.stringify(obj));
    priceElement.textContent = `₹${350} Only`;
    jerseyQuantity.value = "1";
    console.log(obj)
})
