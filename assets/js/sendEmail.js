function sendMail(contactForm) {
    event.preventDefault()
    emailjs.send("Henrique Peroni", "charliebrew", {
        "from_fname": contactForm.fname.value,
        "from_lname": contactForm.lname.value,
        "from_email": contactForm.email.value,
        "request_message": contactForm.message.value,
    })

    .then(
        function(response) {
            refresh();
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
}
    function refresh() {
        document.getElementById("contactForm ").reset();
    }

/*   contactForm   */