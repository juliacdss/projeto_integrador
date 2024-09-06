document.addEventListener('DOMContentLoaded', () => {
    const ingredientsContainer = document.getElementById('ingredients-container');
  
    // Adiciona um evento de clique para cada ingrediente
    document.querySelectorAll('.ingredients').forEach(ingredient => {
      ingredient.addEventListener('click', (event) => {
        const img = document.createElement('img');
        img.src = event.target.src;
        img.alt = event.target.alt;
        img.className = 'alimentos-no-prato';
        img.style.position = 'absolute';
        img.style.top = `${Math.random() * 80}%`; // Posição aleatória dentro do prato
        img.style.left = `${Math.random() * 80}%`; // Posição aleatória dentro do prato
        img.style.transform = 'translate(-50%, -50%)'; // Ajusta o centro da imagem
  
        ingredientsContainer.appendChild(img);
        
      });
    });
  });
  