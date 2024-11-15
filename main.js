// Sticky menu transparency
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  navbar.style.background = window.scrollY > 100 ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0)";
});

// Slider functionality
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const slideDescription = document.querySelector('.slide-description');
const slideButton = document.querySelector('.slider-btn a');

const descriptions = [
    "PARIS, FRANCE: ROMANTIC CITY OF TIMELESS CHARM.",
    "KYOTO, JAPAN: TRADITIONAL TEMPLES AMIDST SCENIC BEAUTY.",
    "CAPE TOWN, SOUTH AFRICA: VIBRANT LANDSCAPES MEET COASTAL ADVENTURES.",
    "SANTORINI, GREECE: WHITE CLIFFS OVERLOOKING TURQUOISE SEAS."
];

const buttonLinks = [
    "#link1",
    "#link2",
    "#link3",
    "#link4"
];

let currentIndex = 0;
const intervalTime = 5000; // 5 seconds

// Function to show a particular slide
function showSlide(index) {
    slides[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    
    slideDescription.textContent = descriptions[index];
    slideButton.setAttribute('href', buttonLinks[index]);
    
    currentIndex = index;
}

// Auto-slide function to go to the next slide
function nextSlide() {
    const nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
}

// Add event listeners to dots for manual slide selection
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
});

// Set interval to change slides automatically every 5 seconds
setInterval(nextSlide, intervalTime);

// Initialize by showing the first slide
showSlide(currentIndex);

// Fade-in effect on scroll
const fadeInSections = document.querySelectorAll('.fade-in-section');

function checkFadeIn() {
    fadeInSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const fadeInPoint = window.innerHeight * 0.8; // Adjust for when you want the effect to start

        if (sectionTop < fadeInPoint) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

// Attach the fade-in check to the scroll event
window.addEventListener('scroll', checkFadeIn);

// Initial check to apply fade-in effect for sections already in view on load
checkFadeIn();

// Hamburger Menu Toggle for Mobile
const hamburger = document.getElementById("hamburger-menu");
const navbarLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

// hot deals section /////////////////////////////
// Scroll function to move cards
function scrollLeft() {
    const container = document.querySelector('.cards');
    container.scrollBy({
        right: 220, // Adjust scroll distance as needed
        behavior: 'smooth'
    });
}

function scrollRightt() {
    const container = document.querySelector('.cards');
    container.scrollBy({
        left: -220, // Adjust scroll distance as needed
        behavior: 'smooth'
    });
}
function scrollRight() {
    const container = document.querySelector('.cards');
    container.scrollBy({
        left: 220, // Adjust scroll distance as needed
        behavior: 'smooth'
    });
}

// Optional auto-center effect on resize
window.addEventListener('resize', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.transform = 'scale(1)';
    });
});

