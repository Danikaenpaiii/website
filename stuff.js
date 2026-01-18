// Retro Portfolio JavaScript

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// Add active state to navigation
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.borderBottomColor = 'var(--accent)';
            link.style.color = 'var(--accent)';
        } else {
            link.style.borderBottomColor = 'transparent';
            link.style.color = 'var(--dark-brown)';
        }
    });
});

// Project card modal functionality
const modal = document.getElementById('projectModal');
const closeBtn = document.querySelector('.close-btn');
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', function() {
        const img = this.querySelector('.project-image');
        const title = this.querySelector('h3');
        const description = this.querySelector('p');
        
        document.getElementById('modalImage').src = img.src;
        document.getElementById('modalImage').alt = img.alt;
        document.getElementById('modalTitle').textContent = title.textContent;
        document.getElementById('modalDescription').textContent = description.textContent;
        
        modal.classList.add('active');
    });
});

// Close modal
closeBtn.addEventListener('click', function() {
    modal.classList.remove('active');
});

// Close modal when clicking outside of it
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        modal.classList.remove('active');
    }
});
