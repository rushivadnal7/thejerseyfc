// email    
// const input = document.querySelector('.idbox');
function sendEmail(e) {
    e.preventDefault();
    const mySite = JSON.parse(localStorage.getItem("mysite"));
    console.log(mySite)
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "rushikeshvadnal7@gmail.com",
        Password: "350319117806CC0FA0C9EFA9A91A8462A699",
        To: 'theteehoodstore7@gmail.com',
        From: "rushikeshvadnal7@gmail.com",
        Subject: "ORDER AND USER DETAILS",
        Body: `
        club Name : ${mySite.clubName} 
        fullname : ${mySite.fullname}
        delivery name : ${mySite.delname}
        address  : ${mySite.address}
        city : ${mySite.city}
        land mark : ${mySite.landmark}
        state : ${mySite.state}
        pincode : ${mySite.pincode}
        phonenumber : ${mySite.number}
        email : ${mySite.email}
        quantity : ${mySite.quantity}
        size : ${mySite.size}
        shorts : ${mySite.shorts}
        sleeves : ${mySite.sleeves}
        price : ${mySite.finalprice}
        
        `
    })
        .then(function (message) {

            alert("Wait for a While , Your order confirmation and tracking code will be sent to your Whatsapp number")
            // setTimeout(() => {
            //     // const url = new URL(window.location);
            //     // console.log(url);
            //     // url.searchParams.set('pay.html', 'lastpage.html');
            //     // console.log(url);
            //     window.history.pushState({}, '', 'http://127.0.0.1:5501/lastpage.html');
            //     location.reload();
            // }, 1000)
        });
}
document.querySelector("#probtn").addEventListener("click", sendEmail);



// info part
// console.log(JSON.parse(localStorage.getItem("mysite")));