// $(' toggle i').Click(function(){
//     $('ul').toggle('show');
// });
const changeprices = function(price){
    document.querySelectorAll(".txt p").forEach(el => {
        // console.log(el.textContent)
        el.textContent= price;
    })
}

changeprices("₹550 only")
