document.addEventListener("DOMContentLoaded", function () {
    const heroSection = document.querySelector(".hero-section");
    const images = [
        "",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg"
    ];
    let index = 0;

    function changeBackground() {
        heroSection.style.backgroundImage = `url(${images[index]})`;
        index = (index + 1) % images.length;
    }

    setInterval(changeBackground, 5000); // Change image every 5 seconds
});



document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});
