// const input = document.querySelector('.idbox');
function sendEmail() {
    const customerName = document.getElementById("name").value;
    const customerEmail = document.getElementById("email").value;
    const customerMessage = document.getElementById("message").value;
    const feedback = document.getElementById("feedback").value;
    const contactobj = {
        customerName, customerEmail, customerMessage, feedback
    }
    console.log(contactobj);

    fetch('https://jersey-fc-default-rtdb.firebaseio.com/contact.json', {
        method: 'POST',
        // body: JSON.stringify(contactobj),
        body: JSON.stringify(contactobj),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => response.json())
        .then(data => console.log(data))
        .catch(err=>console.error(err));
    location.reload();
    alert("ThankYou , Your Message has been Received ")    
}

document.querySelector("#btn").addEventListener("click", sendEmail);