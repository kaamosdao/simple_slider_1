const slides = document.querySelectorAll('.slide');

const clearActiveClasses = () => {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
};

const slidesHandler = () => {
  slides.forEach((slide) => {
    slide.addEventListener('click', (event) => {
      event.preventDefault();
      clearActiveClasses();
      slide.classList.add('active');
    });
  });
};

slidesHandler();
