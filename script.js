let currentIndex = 0

document.addEventListener('DOMContentLoaded', function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const slideCount = slides.length;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slideCount;
    showSlide(currentSlide);
  }

  // Initially show first slide
  showSlide(currentSlide);

  setInterval(nextSlide, 3000);
});



document.querySelector('.menubar').addEventListener('click', () => {
  document.querySelector('.mobileMenuBar').classList.toggle('height')
})


// card slider


function showSlide(index) {
  const slider = document.querySelector('.card-slider');
  const slideWidth = document.querySelector('.card').offsetWidth;
  const maxIndex = slider.children.length - 1;

  if (index < 0) {
    index = 0;
  } else if (index > maxIndex) {
    index = maxIndex;
  }

  slider.style.transform = `translateX(${-index * slideWidth}px)`;
  currentIndex = index;
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

// Initialize slider
showSlide(currentIndex);