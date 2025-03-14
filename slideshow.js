let slideIndex = 1;

// Function to move slides
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Function to jump to a specific slide
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// Main slideshow logic
function showSlides(n) {
  let i;
  // Find all slideshow containers on the page
  let slideshows = document.querySelectorAll(
    ".slideshow-container, .about-slideshow-container"
  );

  slideshows.forEach((slideshow) => {
    let slides = slideshow.getElementsByClassName("slide");
    let dots = slideshow.getElementsByClassName("dot");

    // Adjust slideIndex if out of bounds
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
      slides[i].className = slides[i].className.replace(" active", "");
    }

    // Reset all dots
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the current slide and activate its dot
    slides[slideIndex - 1].className += " active";
    if (dots.length > 0) {
      dots[slideIndex - 1].className += " active";
    }
  });
}

// Initialize slideshows and generate dots
document.addEventListener("DOMContentLoaded", function () {
  let slideshows = document.querySelectorAll(
    ".slideshow-container, .about-slideshow-container"
  );

  slideshows.forEach((slideshow) => {
    let slides = slideshow.getElementsByClassName("slide");
    let dotContainer = slideshow.querySelector(".dot-container");

    // Clear existing dots (in case of multiple initializations)
    dotContainer.innerHTML = "";

    // Generate dots dynamically based on number of slides
    for (let i = 0; i < slides.length; i++) {
      let dot = document.createElement("span");
      dot.className = "dot";
      dot.addEventListener("click", function () {
        currentSlide(i + 1);
      });
      dotContainer.appendChild(dot);
    }

    // Initialize the slideshow
    showSlides(slideIndex);

    // Optional: Auto-advance every 5 seconds (remove if not wanted)
    setInterval(() => {
      plusSlides(1);
    }, 5000);
  });
});
