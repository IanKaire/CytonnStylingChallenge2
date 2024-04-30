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