const changeprices = function (price) {
    document.querySelectorAll(".txt p").forEach(el => {
        el.textContent = price;
        
    })
}
let prevPrice = "₹800"
let newPrice = "₹550 only"
changeprices(`${newPrice}`)
