const bgDiv = document.querySelector(".hero-bg");
const images = [
  "./asset/slide_1.webp",
  "./asset/slide_2.webp",
  "./asset/slide_3.webp"
];

let index = 0;

const preloadedImages = images.map(src => {
  const img = new Image();
  img.src = src;
  return img;
});

function changeBackground() {
  bgDiv.classList.add("fade-out");

  setTimeout(() => {
    index = (index + 1) % images.length;

    const currentImage = preloadedImages[index];
    if (currentImage.complete) {
      updateBackground(currentImage.src);
    } else {
      currentImage.onload = () => updateBackground(currentImage.src);
    }
  }, 500);
}

function updateBackground(src) {
  bgDiv.style.backgroundImage = `url('${src}')`;
  bgDiv.classList.remove("fade-out");

  bgDiv.style.animation = "none";
  void bgDiv.offsetWidth;
  bgDiv.style.animation = "zoomOut 6s ease-in-out forwards";
}

setInterval(changeBackground, 6000);