// const arr = ["#barcaH" , "#barcaA" , "#mancH" , "mancbox" ];
arr.forEach(el =>{
    const imgop = document.querySelector(el); 
    imgop.style.opacity = "0.4";
    // const parent = imgop.parentElement;
    console.log(imgop.parentElement.href)
    // imgop.parentElement.href= "";
    imgop.addEventListener("click", e=>{
        e.preventDefault();
    })
    imgop.style.cursor = "not-allowed"
    imgop.parentElement.querySelector(".prices").textContent="OUT OF STOCK"
    imgop.parentElement.querySelector(".prices").style.fontFamily="Libre Baskerville"
    // console.log(imgop.getAttribute("href"));
})

const outofstock = ["mancbox"];
outofstock.forEach(el =>{
    const box = document.querySelector(el);
    box.addEventListener("click", e=>{
        e.preventDefault();
    })
    box.style.cursor = "not-allowed"

})

// document.querySelectorAll("#barcaH , #barcaA , #mancH");
// JSON.parse(localStorage.getItem("mysite"));