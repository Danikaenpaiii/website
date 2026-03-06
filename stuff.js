// Retro Portfolio JavaScript

// Scroll-triggered animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Project modal functionality
const modal = document.getElementById('projectModal');
const closeBtn = document.querySelector('.close-btn');

function setupProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
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
}

// Setup project cards on load
setupProjectCards();

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
