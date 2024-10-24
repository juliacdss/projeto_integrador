document.addEventListener('DOMContentLoaded', () => {
    const beneficios = document.querySelectorAll('.beneficio');

    beneficios.forEach(beneficio => {
        beneficio.addEventListener('click', () => {
            beneficio.classList.toggle('active');
            const texto = beneficio.querySelector('.beneficio-texto');
            if (texto.style.display === 'block') {
                texto.style.display = 'none';
            } else {
                texto.style.display = 'block';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const submenuLinks = document.querySelectorAll('.link-car');

    submenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            const submenu = this.nextElementSibling; 
            const isVisible = submenu.style.display === 'block';

            document.querySelectorAll('.submenu').forEach(s => {
                s.style.display = 'none';
            });

            submenu.style.display = isVisible ? 'none' : 'block';
        });
    });
});




