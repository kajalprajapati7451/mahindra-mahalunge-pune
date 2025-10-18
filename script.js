
window.addEventListener('load', () => {
    const popup = document.getElementById('comingSoonPopup');
    if (popup) popup.classList.add('active');
});


function closePopup() {
    const popup = document.getElementById('comingSoonPopup');
    if (popup) popup.classList.remove('active');
}


window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        if (targetId && targetId !== '#') {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });
});


const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const overlay = document.getElementById('overlay');

function toggleMenu() {
    hamburger?.classList.toggle('active');
    navLinks?.classList.toggle('active');
    overlay?.classList.toggle('active');
    document.body.style.overflow = navLinks?.classList.contains('active') ? 'hidden' : '';
}


hamburger?.addEventListener('click', toggleMenu);
overlay?.addEventListener('click', toggleMenu);


document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) toggleMenu();
    });
});


window.addEventListener('resize', () => {
    if (window.innerWidth > 968 && navLinks.classList.contains('active')) toggleMenu();
});


const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', e => {
        e.preventDefault();

        const name = document.getElementById('name')?.value.trim();
        const mobile = document.getElementById('mobile')?.value.trim();
        const email = document.getElementById('email')?.value.trim();

        if (name && mobile && email) {
            alert(`Thank you ${name}! We'll notify you at ${email} or ${mobile} when we launch.`);
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const scrollDownBtn = document.querySelector('.scroll-down');
    const contactSection = document.querySelector('.contact-section');
    
    if (scrollDownBtn && contactSection) {
        scrollDownBtn.addEventListener('click', (e) => {
            e.preventDefault();
           
            contactSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
});
