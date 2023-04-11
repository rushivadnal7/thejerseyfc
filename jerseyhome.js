const changeprices = function (price) {
    document.querySelectorAll(".txt p").forEach(el => {
        el.textContent = price;
        // el.style.textDecoration = "line-through";
        el.innerHTML = `<span  id="prevprice" style="text-decoration: line-through" style="font-size: medium">₹${prevPrice}</span> 
        <span  id="newprice" style="font-size: x-large"> ₹${newPrice} only </span>`;
        
    })
}
const changeiplprices = function (price) {
    document.querySelectorAll(".infotxt1 p").forEach(el => {
        el.textContent = price;
        // el.style.textDecoration = "line-through";
        el.innerHTML = `<span  id="prevprice" style="text-decoration: line-through" style="font-size: medium">₹${previplPrice}</span> 
        <span  id="newprice" style="font-size: x-large"> ₹${newiplPrice} only </span>`;
        
    })
}
const changeiplprices2 = function (price) {
    document.querySelectorAll(".infotxt2 p").forEach(el => {
        el.textContent = price;
        // el.style.textDecoration = "line-through";
        el.innerHTML = `<span  id="prevprice" style="text-decoration: line-through" style="font-size: medium">₹${previplPrice2}</span> 
        <span  id="newprice" style="font-size: x-large"> ₹${newiplPrice2} only </span>`;
        
    })
}
let prevPrice = "800"
let newPrice = "500"
changeprices(`${prevPrice} ${newPrice}`)

let previplPrice = "450"
let newiplPrice = "350"
changeiplprices(`${previplPrice} ${newiplPrice}`)

let previplPrice2 = "650"
let newiplPrice2 = "500"
changeiplprices2(`${previplPrice2} ${newiplPrice2}`)
