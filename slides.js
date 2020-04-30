let slideIndex = 0;

function showSlides() {
  let i, slides = document.getElementsByClassName("slide"),
    dots = document.getElementsByClassName("demo");
  if (slideIndex < 0) slideIndex += slides.length * 1000;
  slideIndex %= slides.length;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}

function plusSlides(n) {
  slideIndex += n;
  showSlides();
}

function currentSlide(n, j) {
  slideIndex = n;
  showSlides();
}

