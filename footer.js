const footercc = function(value){
    document.querySelectorAll("#cc").forEach(el => {
        // console.log(el.textContent)
        el.textContent= value;
    })
}

footercc("© 2022 The Jersey-Fc All Rights Reserved");
const feedback = document.getElementById("feedback");
function sendfeedback(){
    fetch('https://jersey-fc-default-rtdb.firebaseio.com/feedback.json', {
        method: 'POST',
        body: JSON.stringify(feedback.value),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => response.json())
    .then(data => console.log(data));
    location.reload();
    alert("ThankYou , Your Feedback has been Received ")
}

document.querySelector("#feedbackbtn").addEventListener("click",sendfeedback);
// function sendEmail() {
//     const feedback = document.getElementById("feedback");
//     Email.send({
//         Host: "smtp.elasticemail.com",
//         Username: "rushikeshvadnal7@gmail.com",
//         Password: "350319117806CC0FA0C9EFA9A91A8462A699",
//         To: 'thejerseyfcstore@gmail.com',
//         From: "rushikeshvadnal7@gmail.com",
//         Subject: "FEEDBACK",
//         Body: `
//         FEEDBACK : ${feedback.value}
//         `,
//     })
//         .then(function (message) {
//             alert("FeeedBack sent successfully")
//         });

//         document.querySelector("#feedback").value= " "   
//         // document.querySelector("#footer-field").value= " "   
     
// }