const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
]
const randomBgImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.body;

bgImage.style.backgroundImage = `url(img/${randomBgImage})`;

console.log(bgImage);
