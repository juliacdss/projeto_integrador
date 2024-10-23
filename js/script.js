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



// Loading 

