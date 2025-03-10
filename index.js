let contactMeBtns = document.getElementsByClassName("contact-me");

for (let btn of contactMeBtns) {
    btn.addEventListener("click", function () {

        let emailBox = document.getElementById("email-box");

        if (emailBox.style.display === "none") {
            emailBox.style.display = "block";
        } else {
            emailBox.style.display = "none";
        }
    });
}

let profileBio = "Welcome to my portfolio! Here you'll find my projects, skills, and interests as a Junior Developer. Explore and feel free to connect!";


let bioElement = document.querySelector(".profile-bio");
bioElement.innerHTML = "";

let i = 0;

function typeBio() {
    if (i < profileBio.length) {  // Use profileBio instead of bioText
        bioElement.innerHTML += profileBio.charAt(i);
        i++;
        setTimeout(typeBio, 50);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    typeBio();  // Starts typing effect when the DOM content is loaded
});
