const heroSection = document.getElementById("hero");
const slides = [
  "./asset/slide_1.jpg",
  "./asset/slide_2.jpg",
  "./asset/slide_3.jpg"
];
let currentSlide = 0;

function changeSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  heroSection.style.backgroundImage = `url('${slides[currentSlide]}')`;
}

// Ganti slide setiap 3 detik
setInterval(changeSlide, 5000);
