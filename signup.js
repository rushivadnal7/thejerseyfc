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

document.getElementById("form").addEventListener("submit",e=>{

    e.preventDefault();
    console.log("form submitted")
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
    window.location.href = "pay.html";
    
})


function emptyCredentialsCheck(){
    var fname = document.forms.signupform.fname;
    var lname = document.forms.signupform.lname;
    var address = document.forms.signupform.address;
    var city = document.forms.signupform.city;
    var state = document.forms.signupform.state;
    var landmark = document.forms.signupform.landmark;
    var phonnenumber = document.forms.signupform.phonnenumber;
    var pincode = document.forms.signupform.pincode;
    var email = document.forms.signupform.email;

    console.log(fname)
    if(fname == ""){
        alert("Please enter your first Name");
        fname.focus;
        return false;
    }
    if(lname == ""){
        alert("Please enter your Last Name");
        lname.focus;
        return false;
    }
    if(address == ""){
        alert("Please enter your Address");
        address.focus;
        return false;
    }
    if(city == ""){
        alert("Please enter your city");
        city.focus;
        return false;
    }
    if(state == ""){
        alert("Please enter your state");
        state.focus;
        return false;
    }
    if(landmark== ""){
        alert("Please enter your landmark");
        landmark.focus;
        return false;
    }
    if(phonnenumber== ""){
        alert("Please enter your Phone Number");
        phonnenumber.focus;
        return false;
    }
    if(pincode== ""){
        alert("Please enter your pincode");
        pincode.focus;
        return false;
    }
    if(email== ""){
        alert("Please enter your Email");
        email.focus;
        return false;
    }
   
    return true;
}


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
