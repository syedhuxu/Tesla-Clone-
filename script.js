const heroSection = document.querySelector(".hero-section");
const modelName = document.querySelector(".model-name");
const images = [
  "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Promo-Meet-Model-3-Desktop.jpg",
  "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Promo-Meet-Model-Y-Desktop.jpg",
  "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Promo-Meet-Model-3-Desktop.jpg",
  "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Promo-Cybertruck-Desktop-US-v2.jpg",
];
const models = ["Model 3", "Model Y", "Model S", "Cybertruck"];

let currentIndex = 0;
setInterval(() => {
  heroSection.style.opacity = 0.8;
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % images.length;

    heroSection.style.backgroundImage = `url("${images[currentIndex]}")`;
    modelName.textContent = models[currentIndex];

    heroSection.style.opacity = 1;
  }, 600);
}, 3000);
