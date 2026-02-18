const hexButtons = document.querySelectorAll(".hex");
const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".carousel section");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

let currentIndex = 0;

function updateCarousel(index) {
  currentIndex = index;

  slides.forEach(slide => slide.classList.remove("active-slide"));
  hexButtons.forEach(btn => btn.classList.remove("active"));

  slides[index].classList.add("active-slide");
  hexButtons[index].classList.add("active");

  carousel.scrollTo({
    left: slides[index].offsetLeft - (carousel.offsetWidth - slides[index].offsetWidth) / 2,
    behavior: "smooth"
  });
}

// BOTONES
hexButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    updateCarousel(index);
  });
});

// FLECHA DERECHA
rightArrow.addEventListener("click", () => {
  if (currentIndex < slides.length - 1) {
    updateCarousel(currentIndex + 1);
  }
});

// FLECHA IZQUIERDA
leftArrow.addEventListener("click", () => {
  if (currentIndex > 0) {
    updateCarousel(currentIndex - 1);
  }
});

document.addEventListener("keydown", (event) => {

  if (event.key === "ArrowRight") {
    if (currentIndex < slides.length - 1) {
      updateCarousel(currentIndex + 1);
    }
  }

  if (event.key === "ArrowLeft") {
    if (currentIndex > 0) {
      updateCarousel(currentIndex - 1);
    }
  }

});