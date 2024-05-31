document.addEventListener('DOMContentLoaded', (event) => {
    var modal = document.getElementById("contactModal");
    var btn = document.getElementById("contactLink");
    var contactButton = document.getElementById("contactButton");
    var closeButton = document.querySelector('.close-button');
    var header = document.querySelector('header');

    btn.onclick = function(event) {
        event.preventDefault();
        modal.style.display = "flex";
    }

    contactButton.onclick = function(event) {
        event.preventDefault();
        modal.style.display = "flex";
    }

    closeButton.onclick = function(event) {
        closeModal();
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    window.onscroll = function() {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
            header.classList.remove('header-transparent');
        } else {
            header.classList.add('header-transparent');
            header.classList.remove('header-scrolled');
        }
    }

    // Initial state
    header.classList.add('header-transparent');

    // Adding animation to hero title
    const heroTitle = document.querySelector('.hero-title');
    heroTitle.style.opacity = '0';
    heroTitle.style.transition = 'opacity 2s ease-in-out';
    window.addEventListener('load', () => {
        heroTitle.style.opacity = '1';
    });

    // Adding smooth scrolling to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

function closeModal() {
    document.getElementById('contactModal').style.display = 'none';
}
