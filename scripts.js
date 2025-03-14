// scripts.js

document.addEventListener("DOMContentLoaded", function () {
  // Select all elements with the fade-in class
  const fadeElements = document.querySelectorAll(".fade-in");

  // Create an Intersection Observer to trigger fade-in when elements come into view
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // Add visible class to trigger CSS animation
          observer.unobserve(entry.target); // Stop observing once the animation is triggered
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the element is visible
    }
  );

  // Observe each fade-in element
  fadeElements.forEach((element) => {
    observer.observe(element);
  });
});
