
const paymentMethodCOD = document.getElementById("codbtn");
const paymentMethodONLINE = document.getElementById("onlbtn");
function sendEmail(e) {
    e.preventDefault();
   
    // const upiName = document.getElementById("upiname").value;
    // console.log(upiName)
    const obj=JSON.parse(localStorage.getItem("mysite"));
    obj.COD = paymentMethodCOD.value;  
    obj.ONLINE = paymentMethodONLINE.value;  
    localStorage.setItem("mysite", JSON.stringify(obj));
    // console.log(obj)
    // console.log(mySite)
    
    let mySite = JSON.parse(localStorage.getItem("mysite"));
    fetch('https://jersey-fc-default-rtdb.firebaseio.com/users.json', {
        method: 'POST',
        body: JSON.stringify(mySite),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => response.json())
        .then(data => console.log(data));
}
document.querySelector("#probtn").addEventListener("click", sendEmail);

// function check(){
//     var onlinebtn = document.getElementById("onlbtn");
//     if(onlinebtn==sel){

//     }
//     var img = document.createElement('img');
//     img.src= "url('qrcode.jpeg')"
//     document.getElementById("qrcode").appendChild(img);
// }

function alerthome(){
    alert("Wait for a While , Your order confirmation and tracking code will be sent to your Whatsapp number")
    window.open("index.html")
}

// Email.send({
//     Host: "smtp.elasticemail.com",
//     Username: "rushikeshvadnal7@gmail.com",
//     Password: "350319117806CC0FA0C9EFA9A91A8462A699",
//     To: 'thejerseyfcstore@gmail.com',
//     From: "theteehoodstore7@gmail.com",
//     Subject: "ORDER AND USER DETAILS",
//     Body: `
//     club Name : ${mySite.clubName} 
//     fullname : ${mySite.fullname}
//     delivery name : ${mySite.delname}
//     address  : ${mySite.address}
//     city : ${mySite.city}
//     land mark : ${mySite.landmark}
//     state : ${mySite.state}
//     pincode : ${mySite.pincode}
//     phonenumber : ${mySite.number}
//     email : ${mySite.email}
//     quantity : ${mySite.quantity}
//     size : ${mySite.size}
//     shorts : ${mySite.shorts}
//     sleeves : ${mySite.sleeves}
//     price : ${mySite.finalprice}

//     `
// })
//     .then(function (message) {

//         alert("Wait for a While , Your order confirmation and tracking code will be sent to your Whatsapp number")
//         // setTimeout(() => {
//         //     // const url = new URL(window.location);
//         //     // console.log(url);
//         //     // url.searchParams.set('pay.html', 'lastpage.html');
//         //     // console.log(url);
//         //     window.history.pushState({}, '', 'http://127.0.0.1:5501/lastpage.html');
//         //     location.reload();
//         // }, 1000)
//     });
// info part
// console.log(JSON.parse(localStorage.getItem("mysite")));