document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('#main-nav .nav-item');
    const sections = document.querySelectorAll('section');

    function highlightSection(id) {
        sections.forEach(section => section.classList.remove('highlight'));
        const targetSection = document.querySelector(id);
        if (targetSection) {
            targetSection.classList.add('highlight');
            targetSection.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' // Center the element vertically in the viewport
            });
        }
    }

    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            highlightSection(this.getAttribute('href'));
        });
    });

    sections.forEach(section => {
        section.addEventListener('click', function() {
            sections.forEach(s => s.classList.remove('highlight'));
            this.classList.add('highlight');
            const correspondingNav = document.querySelector(`a[href="#${this.id}"]`);
            if (correspondingNav) {
                navItems.forEach(nav => nav.classList.remove('active'));
                correspondingNav.classList.add('active');
            }
        });
    });

    // Highlight home section by default
    highlightSection('#home');
    navItems[0].classList.add('active');
});
