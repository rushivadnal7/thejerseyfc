const changeprices = function(price){
    document.querySelectorAll(".txt p").forEach(el => {
        // console.log(el.textContent)
        el.textContent= price;
    })
}

changeprices("₹499 only")
