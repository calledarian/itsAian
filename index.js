let contactMeBtns = document.getElementsByClassName("contact-me");

for (let btn of contactMeBtns) {
    btn.addEventListener("click", function() {

        let emailBox = document.getElementById("email-box");

        if (emailBox.style.display === "none") {
            emailBox.style.display = "block";
        } else {
            emailBox.style.display = "none";
        }
    });
}
