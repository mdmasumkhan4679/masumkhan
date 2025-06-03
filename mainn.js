const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Graphic Designer', 'Computer Operator'],
    typeSpeed: 150,
    backSpeed: 10,
    backDelay: 150,
    loop: true
});

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .projects-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

const themeToggle = document.querySelector('#theme-toggle');
const darkModeIcon = document.querySelector('.dark-mode-icon');
const lightModeIcon = document.querySelector('.light-mode-icon');

const savedTheme = localStorage.getItem('theme') || 
                   (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', savedTheme);

if (savedTheme === 'dark') {
    darkModeIcon.style.display = 'none';
    lightModeIcon.style.display = 'inline-block';
} else {
    darkModeIcon.style.display = 'inline-block';
    lightModeIcon.style.display = 'none';
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'dark') {
        darkModeIcon.style.display = 'none';
        lightModeIcon.style.display = 'inline-block';
    } else {
        darkModeIcon.style.display = 'inline-block';
        lightModeIcon.style.display = 'none';
    }
});

const contactForm = document.querySelector('.contact form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    console.log('Form submitted:', data);
    
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

const skillBars = document.querySelectorAll('.progress');

function animateSkills() {
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills();
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

document.querySelectorAll('.glow-box').forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.transform = 'translateY(-10px)';
        box.style.boxShadow = '0 0 20px var(--main-color)';
    });
    
    box.addEventListener('mouseleave', () => {
        box.style.transform = '';
        box.style.boxShadow = '';
    });
});

document.querySelectorAll('section').forEach(section => {
    section.addEventListener('mouseenter', () => {
        const currentBg = getComputedStyle(section).backgroundColor;
        section.style.backgroundColor = currentBg === 'rgb(50, 57, 70)' ? 'rgb(31, 36, 45)' : 'rgb(50, 57, 70)';
    });
    
    section.addEventListener('mouseleave', () => {
        const currentBg = getComputedStyle(section).backgroundColor;
        section.style.backgroundColor = currentBg === 'rgb(31, 36, 45)' ? 'rgb(50, 57, 70)' : 'rgb(31, 36, 45)';
    });
});