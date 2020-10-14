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
            startModal('modalEmail');
            refresh();
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
}

// Refresh the page when the form is submited
function refresh() {
    document.getElementById("contactForm ").reset();
}

// Modal pop up in the screen when form is submited
function startModal(modalID) {
    const modal = document.getElementById(modalID);
    modal.classList.add('showModal');
    modal.addEventListener('click', (e) => {
        if(e.target.id == "modalID" || e.target.className == "close") {
            modal.classList.remove("showModal")
        }

    });
}


