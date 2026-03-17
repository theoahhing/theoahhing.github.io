const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

const images = [
    "Photos/Travel Shots/IMG_5344.jpg",
    "Photos/Travel Shots/IMG_5353.jpg",
    "Photos/Travel Shots/IMG_7512.jpg",
    "Photos/Travel Shots/IMG_7827.jpg",
    "Photos/Travel Shots/IMG_7865.jpg",
    "Photos/Travel Shots/SZJJ0705.JPG",
    "Photos/Travel Shots/XPMY8925.JPG",
    "Photos/Travel Shots/IMG_5250.JPG"
];

let index = 0;

const slideshow = document.getElementById("slideshow-image");

function changeImage() {

    slideshow.style.opacity = 0;

    setTimeout(() => {

        index = (index + 1) % images.length;
        slideshow.src = images[index];
        slideshow.style.opacity = 1;

    }, 700);

}

setInterval(changeImage, 5000);