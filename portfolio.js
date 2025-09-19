// Portfolio Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Filter cards
        projectCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
                gsap.fromTo(card, 
                    { opacity: 0, y: 50 }, 
                    { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
                );
            } else {
                gsap.to(card, { opacity: 0, y: 50, duration: 0.5, ease: 'power3.out', onComplete: () => card.style.display = 'none' });
            }
        });
    });
});

// Modal Functionality
const modal = document.getElementById('project-modal');
const closeModal = document.querySelector('.close-modal');
const linkBtns = document.querySelectorAll('.link-btn');

linkBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (e.target.closest('i').classList.contains('fa-eye')) {
            e.preventDefault();
            const card = btn.closest('.project-card');
            const img = card.querySelector('img');
            const title = card.querySelector('h3').textContent;
            const desc = card.querySelector('p').textContent;
            
            const modalBody = document.querySelector('.modal-body');
            modalBody.innerHTML = `
                <img src="${img.src}" alt="${img.alt}">
                <h3>${title}</h3>
                <p>${desc}</p>
                <p>This is a detailed description of the project. It showcases the technologies used, challenges faced, and solutions implemented.</p>
                <div class="project-links">
                    <a href="#" class="link-btn"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                    <a href="#" class="link-btn"><i class="fab fa-github"></i> Source Code</a>
                </div>
            `;
            
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
});