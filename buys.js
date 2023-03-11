const checkBox1 = document.getElementById("checkbox1");
const checkBox2 = document.getElementById("checkbox2");
const priceElement = document.getElementById("price");
const jerseyQuantity = document.getElementById("jerQuantity");
const clubName = document.getElementById("clubName");


let currentPrice = 500;
if (checkBox1.checked) {
    currentPrice += 150;

}
if (checkBox2 && checkBox2.checked) {
    currentPrice += 150;
}
priceElement.textContent = `₹${currentPrice} Only`;
// console.log(currentPrice)
checkBox1.addEventListener("change", e => {
    const quantity = +jerseyQuantity.value;

    if (e.target.checked) {
        currentPrice += (150 * quantity);
    }
    else {
        currentPrice -= (150 * quantity);
    }

    priceElement.textContent = `₹${currentPrice} Only`;
})

// checkBox2.addEventListener("change",e=>{
//     if(e.target.checked){
//         currentPrice += 150;
//     }
//     else{
//         currentPrice -= 150;  
//     }
//     priceElement.textContent = `₹${currentPrice} Only  `;
// })
// console.log(currentPrice)

jerseyQuantity.addEventListener("change", e => {
    const quantity = +e.target.value;
    console.log(quantity);
    if (checkBox1.checked) {
        currentPrice = 650 * quantity
    }
    else {
        currentPrice = 500 * quantity
    }
    // currentPrice = currentPrice * quantity;
    // currentPrice+= (+e.target.value);
    priceElement.textContent = `₹${currentPrice} Only + 50 shipping charges   `;
});



document.querySelector("#buybtn").addEventListener("click", e => {
    if (!localStorage.getItem("mysite")) {
        localStorage.setItem("mysite", JSON.stringify({}));
    }
    const obj = JSON.parse(localStorage.getItem("mysite"));
    obj.clubName = clubName.textContent;
    // console.log(obj)
    obj.quantity = jerseyQuantity.value;
    obj.size = sizeselect.value;
    if (checkBox1.checked) {
        obj.shorts = "with shorts";
    }
    else {
        obj.shorts = "";
    }
    // if(checkBox2.checked){
    //     obj.sleeves= "full sleeves";
    // }
    // else{
    //     obj.sleeves = "";
    // }
    obj.finalprice = currentPrice;
    localStorage.setItem("mysite", JSON.stringify(obj));
    checkBox1.checked = false;
    priceElement.textContent = `₹${500 + 50} Only  `;
    jerseyQuantity.value = "1";
    // checkBox2.checked=false; 
})
