// scripts.js
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Optional: Auto-play functionality
//setInterval(nextSlide, 3000);

document.getElementById('menu-icon').onclick = function () {
    document.querySelector('.header').classList.toggle('active');
}

ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay:200,
});

ScrollReveal().reveal('.home-content,heading', { origin: 'top' });

ScrollReveal().reveal('.home-img,.skills-container,.project-box,.contact', { origin: 'bottom' });

ScrollReveal().reveal('.home-content h1,.about-img', { origin: 'left' });

ScrollReveal().reveal('.home-content p, .about-content',{ origin: 'right' });


const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer','Web Designer','Software Tester','IT Enthusiast'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});
