const carouselContainer = document.querySelector('.carousel-container');
const images = document.querySelectorAll('.carousel img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

function showSlide() {
    carouselContainer.style.transform = `translateX(${-index * 100}%)`;
}

// Next Button
nextBtn.addEventListener('click', () => {
    index = (index + 1) % images.length; // Loops back to the first image
    showSlide();
});

// Previous Button
prevBtn.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length; // Loops to the last image
    showSlide();
});

// Auto-slide every 3 seconds
setInterval(() => {
    index = (index + 1) % images.length;
    showSlide();
}, 5000);
