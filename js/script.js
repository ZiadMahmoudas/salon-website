let menuToggle = document.querySelector('.menuToggle');
let header = document.querySelector('header');
let section = document.querySelector('section');

menuToggle.onclick = function () {
    header.classList.toggle('active')
    section.classList.toggle('active')
}

const slides = document.querySelectorAll('.slide');

let counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
});

const goPrev = () => {
    counter--
    slideImg()
}
const goNext = () => {
    counter++
    slideImg()
}

const slideImg = () => {
    for (let i = 0; i < slides.length; i++) {
        if (counter >= slides.length) {
            slides.forEach(slide => {
                slide.style.transform = `translateX(-${counter * 0}%)`
            });
        } else {
            slides.forEach(slide => {
                slide.style.transform = `translateX(-${counter * 100}%)`
            });
        }
    }
}

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
if (reveals.length) {
    const obs = new IntersectionObserver((entries) => {
        entries.forEach((e, i) => {
            if (e.isIntersecting) {
                setTimeout(() => e.target.classList.add('visible'), i * 80);
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.1 });
    reveals.forEach(r => obs.observe(r));
}