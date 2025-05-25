const bgDiv = document.querySelector(".hero-bg");
const images = [
  "./asset/slide_1.jpg",
  "./asset/slide_2.jpg",
  "./asset/slide_3.jpg"
];

let index = 0;

function changeBackground() {
  bgDiv.classList.add("fade-out");

  setTimeout(() => {
    index = (index + 1) % images.length;
    bgDiv.style.backgroundImage = `url('${images[index]}')`;
    bgDiv.classList.remove("fade-out");
  }, 1000);
}

setInterval(changeBackground, 7500);
