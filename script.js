const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", function() {
    navMenu.classList.toggle("active");
});


const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        navMenu.classList.remove("active");
    });
});


const contactButton = document.getElementById("contactButton");
const contactMessage = document.getElementById("contactMessage");

contactButton.addEventListener("click", function() {
    contactMessage.textContent = "Terima kasih sudah mengunjungi portfolio saya!";
});