// Clone slides to create seamless loop
const slideTrack = document.querySelector('.custom-slide-track');
const slides = document.querySelectorAll('.custom-slide');

// Calculate total width of slides
const slideWidth = slides[0].clientWidth;
const totalSlides = slides.length;

// Clone slides to ensure continuous loop
for (let i = 0; i < totalSlides; i++) {
  const cloneSlide = slides[i].cloneNode(true);
  slideTrack.appendChild(cloneSlide);
}

// Adjust slide track width to accommodate cloned slides
slideTrack.style.width = `${slideWidth * (totalSlides * 2)}px`;
