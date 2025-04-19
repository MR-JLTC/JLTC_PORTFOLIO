document.addEventListener('DOMContentLoaded', function() {
    const text = document.querySelector('.typing-effect');
    const fullText = text.textContent;
    text.textContent = '';
    let i = 0;
    
    function typing() {
      if (i < fullText.length) {
        text.textContent += fullText.charAt(i);
        i++;
        setTimeout(typing, 100);
      }
    }
    
    setTimeout(typing, 1000);
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
          });
          
          const navbarCollapse = document.querySelector('.navbar-collapse');
          if (navbarCollapse.classList.contains('show')) {
            document.querySelector('.navbar-toggler').click();
          }
        }
      });
    });
    
    window.addEventListener('scroll', function() {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.nav-link');
      
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
          current = section.getAttribute('id');
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
          link.classList.add('active');
        }
      });
    });
});