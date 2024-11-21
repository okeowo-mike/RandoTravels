// hamburger menu /////////////////////////////////////////////////////

const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

// Fade-in effect on scroll ////////////////////////////////////////////
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