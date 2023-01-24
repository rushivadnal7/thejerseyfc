// const input = document.querySelector('.idbox');
function sendEmail() {
    const customerName = document.getElementById("name");
    const customerEmail = document.getElementById("email");
    const customerMessage = document.getElementById("message");
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "rushikeshvadnal7@gmail.com",
        Password: "350319117806CC0FA0C9EFA9A91A8462A699",
        To: 'theteehoodstore7@gmail.com',
        From: "rushikeshvadnal7@gmail.com",
        Subject: "CONTACT US MESSAGE",
        Body: `
        Name : ${customerName.value}
        Email : ${customerEmail.value}
        Message : ${customerMessage.value}
        `,
    })
        .then(function (message) {
            alert("mail sent successfully")
        });
}
document.querySelector("#btn").addEventListener("click",sendEmail);