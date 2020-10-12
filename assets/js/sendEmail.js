function sendMail(contactForm) {
    emailjs.send("Henrique Peroni", "charliebrew", {
        "from_fname": contactForm.fname.value,
        "from_lname": contactForm.lname.value,
        "from_email": contactForm.email.value,
        "request_message": contactForm.message.value,
    })

    .then(
            
            function(response) {
                console.log("SUCCESS", response);
            },
        
            function (error) {
                alert("Sorry, it seems we have a problem. Please fill out the form and Submit again", error);
            });
           
            document.getElementById('contactForm').reset();
    return false;
}