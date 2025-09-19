// Common functionality for all pages

// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const icon = themeToggle.querySelector('i');
    if (body.classList.contains('dark-theme')) {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
    localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
});

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    themeToggle.querySelector('i').className = 'fas fa-sun';
}

// Mobile Menu
const mobileMenu = document.getElementById('mobile-menu');
const sideMenu = document.getElementById('side-menu');
const closeSideMenu = document.getElementById('close-side-menu');

mobileMenu.addEventListener('click', () => {
    sideMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
});

closeSideMenu.addEventListener('click', () => {
    sideMenu.classList.remove('open');
    document.body.style.overflow = '';
});

document.addEventListener('click', (e) => {
    if (!sideMenu.contains(e.target) && !mobileMenu.contains(e.target)) {
        sideMenu.classList.remove('open');
        document.body.style.overflow = '';
    }
});

// Active Nav Links
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link, .side-link').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

// Scroll to Top
const scrollTop = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTop.classList.add('visible');
    } else {
        scrollTop.classList.remove('visible');
    }
});

scrollTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from('.fade-in', {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out'
});

gsap.utils.toArray('.slide-in').forEach(el => {
    ScrollTrigger.create({
        trigger: el,
        start: 'top 80%',
        onEnter: () => gsap.to(el, { duration: 1, y: 0, opacity: 1, ease: 'power3.out' })
    });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});