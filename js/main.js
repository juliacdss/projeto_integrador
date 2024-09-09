
document.addEventListener('DOMContentLoaded', () => {
  const ingredientesContainer = document.getElementById('armazenar-alimentos');

  // Adiciona um evento de clique para cada ingrediente
  document.querySelectorAll('.ingredient').forEach(ingredient => {
    ingredient.addEventListener('click', (event) => {
      const img = document.createElement('img');
      img.src = event.target.src;
      img.alt = event.target.alt;
      img.className = 'alimentos-no-prato';
      img.style.position = 'absolute';
      img.style.top = `${Math.random() * 90}%`; // Posição aleatória dentro do prato
      img.style.left = `${Math.random() * 90}%`; // Posição aleatória dentro do prato
      img.style.transform = 'translate(-50%, -50%)'; // Ajusta o centro da imagem

      ingredientesContainer.appendChild(img);
    });
  });
});
