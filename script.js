const bgDiv = document.querySelector(".hero-bg");
const images = [
  "./asset/slide_1.webp",
  "./asset/slide_2.webp",
  "./asset/slide_3.webp"
];

let index = 0;

// 🔃 Preload semua gambar
const preloadedImages = images.map(src => {
  const img = new Image();
  img.src = src;
  return img;
});

// ⏱ Jalankan perubahan background setelah gambar sudah pasti dimuat
function changeBackground() {
  bgDiv.classList.add("fade-out");

  setTimeout(() => {
    index = (index + 1) % images.length;

    // Pastikan gambar sudah dimuat sebelum ubah background
    const currentImage = preloadedImages[index];
    if (currentImage.complete) {
      updateBackground(currentImage.src);
    } else {
      currentImage.onload = () => updateBackground(currentImage.src);
    }
  }, 500); // ⏳ fade-out lebih singkat agar responsif
}

function updateBackground(src) {
  bgDiv.style.backgroundImage = `url('${src}')`;
  bgDiv.classList.remove("fade-out");

  // 🔁 Reset animasi zoomOut dengan benar
  bgDiv.style.animation = "none";
  void bgDiv.offsetWidth;
  bgDiv.style.animation = "zoomOut 6s ease-in-out forwards";
}

// ⏳ Ganti background setiap 6 detik agar transisi dan tampilan cukup panjang
setInterval(changeBackground, 6000);
