const searchIcon = document.querySelector('.search-icon');
const searchBar = document.getElementById('search-bar');


searchIcon.addEventListener('click', () => {
  searchBar.style.display = searchBar.style.display === 'none' ? 'block' : 'none';
});

const backdrop = document.querySelector(".backdrop");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

backdrop.addEventListener("click", function() {
  // mobileNav.style.display = 'none';
  mobileNav.classList.remove("open");
  backdrop.classList.remove("open");
});

toggleButton.addEventListener("click", function() {
  // mobileNav.style.display = 'block';
  // backdrop.style.display = 'block';
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});

const testimonialDots = document.querySelectorAll('.loading-dot');
const testimonialTexts = document.querySelectorAll('.testimonial-text');

let currentTestimonialIndex = 0;

testimonialDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    // Update active dot and hide previous testimonial
    testimonialDots[currentTestimonialIndex].classList.remove('active');
    testimonialTexts[currentTestimonialIndex].classList.remove("open");

    // Update current index and display new testimonial
    currentTestimonialIndex = index;
    testimonialDots[currentTestimonialIndex].classList.add('active');
    testimonialTexts[currentTestimonialIndex].classList.add("open");
  });
});
