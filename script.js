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

    // 🔄 Reset animasi zoomOut
    bgDiv.style.animation = "none"; // Hapus dulu
    void bgDiv.offsetWidth;         // Trigger reflow agar animasi bisa dijalankan ulang
    bgDiv.style.animation = "zoomOut 5s ease-in-out forwards"; // Set ulang
  }, 1000);
}

setInterval(changeBackground, 5000);
