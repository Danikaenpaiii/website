// Retro Portfolio JavaScript

// Page Navigation
const pageButtons = document.querySelectorAll('.page-btn');
const pages = document.querySelectorAll('.page');

pageButtons.forEach((btn, index) => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons and pages
        pageButtons.forEach(b => b.classList.remove('active'));
        pages.forEach(p => p.classList.remove('active'));
        
        // Add active class to clicked button and corresponding page
        btn.classList.add('active');
        const pageId = btn.getAttribute('data-page');
        document.getElementById(pageId).classList.add('active');
    });
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
