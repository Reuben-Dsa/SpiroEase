const carouselContainer = document.querySelector('.carousel-container');
const images = document.querySelectorAll('.carousel img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsContainer = document.querySelector('.carousel-dots');

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');
  
    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
      });
  
      navItems.forEach(link => {
        link.addEventListener('click', () => {
          navLinks.classList.remove('active');
          hamburger.classList.remove('active');
        });
      });
    }
  });
  
let index = 0;
let interval;

// Create Dots
images.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
        index = i;
        showSlide();
        resetInterval();
    });
    dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll('.dot');

// Show the slide and update dots
function showSlide() {
    carouselContainer.style.transform = `translateX(${-index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

// Next and Prev Navigation
nextBtn.addEventListener('click', () => {
    index = (index + 1) % images.length;
    showSlide();
    resetInterval();
});

prevBtn.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    showSlide();
    resetInterval();
});

// Auto Slide Function
function startAutoSlide() {
    interval = setInterval(() => {
        index = (index + 1) % images.length;
        showSlide();
    }, 3000);
}

// Reset Timer
function resetInterval() {
    clearInterval(interval);
    startAutoSlide();
}

// Start Everything
showSlide();
startAutoSlide();

const tiles = document.querySelectorAll('.tile');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Adds the .show class for animation
        }
    });
}, {
    threshold: 0.2 // Adjust visibility trigger as needed
});

tiles.forEach(tile => {
    observer.observe(tile);
});
