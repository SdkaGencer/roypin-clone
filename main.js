const slideWidth = document.querySelector('.slider').offsetWidth; // Slider'ın genişliği
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const imageCount = images.length;
let currentIndex = 1; // İlk görünen resim

// Başlangıç pozisyonunu ayarla
slides.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

// Kaydırma fonksiyonu
function showNextSlide() {
  currentIndex++;
  slides.style.transition = 'transform 0.5s ease-in-out'; // Geçiş animasyonu
  slides.style.transform = `translateX(-${slideWidth * currentIndex}px)`; // Güncel kaydırma mesafesi

  // Son resme ulaşıldığında başa dön
  if (currentIndex === imageCount - 1) {
    setTimeout(() => {
      slides.style.transition = 'none'; // Animasyonu kaldır
      currentIndex = 1; // Başlangıç pozisyonuna dön
      slides.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    }, 500);
  }
}

// Her 3 saniyede bir kaydır
setInterval(showNextSlide, 3000);
