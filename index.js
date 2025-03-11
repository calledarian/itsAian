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
let cursorVisible = true;

function typeBio() {
    if (i < profileBio.length) {
        bioElement.innerHTML = profileBio.substring(0, i) + "<span class='cursor'>|</span>";
        i++;
        setTimeout(typeBio, 50);
    } else {
        blinkCursor(); // Start blinking effect after typing finishes
    }
}

function blinkCursor() {
    setInterval(() => {
        cursorVisible = !cursorVisible;
        document.querySelector(".cursor").style.opacity = cursorVisible ? "1" : "0";
    }, 500);
}

document.addEventListener("DOMContentLoaded", function () {
    typeBio();
});
