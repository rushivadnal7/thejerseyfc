const changeprices = function (price) {
    document.querySelectorAll(".txt p").forEach(el => {
        el.textContent = price;
        // el.style.textDecoration = "line-through";
        el.innerHTML = `<span  id="prevprice" style="text-decoration: line-through" style="font-size: medium">₹${prevPrice}</span> ₹${newPrice} only`;
        
    })
}
let prevPrice = "800"
let newPrice = "550"
changeprices(`${prevPrice} ${newPrice}`)
