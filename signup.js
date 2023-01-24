// const input = document.querySelector('.data');

// function sendEmail() {
    
//     Email.send({
//         Host: "smtp.elasticemail.com",
//         Username: "rushikeshvadnal7@gmail.com",
//         Password: "350319117806CC0FA0C9EFA9A91A8462A699",
//         To: 'theteehoodstore7@gmail.com',
//         From: "rushikeshvadnal7@gmail.com",
//         Subject: "Sending Email using javascript",
//         Body: `${input.value}`,
//     })
//         .then(function (message) {
//             alert("mail sent successfully")
//         });
// }

// document.querySelector("#btn").addEventListener("click",sendEmail);
const fname= document.getElementById("fname");
document.querySelector("#btn").addEventListener("click",e =>{
    // MYAPP.fullName=fname.value;
    // console.log(MYAPP)
    const obj=JSON.parse(localStorage.getItem("mysite"));
    obj.fullname=fname.value;
    obj.delname=deliveryname.value;
    obj.address=add.value;
    obj.city=city.value;
    obj.state=state.value;
    obj.landmark=land.value;
    obj.pincode=pin.value;
    obj.number=num.value;
    obj.email=mail.value;
    localStorage.setItem("mysite", JSON.stringify(obj));
})
