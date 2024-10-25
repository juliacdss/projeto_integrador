document.addEventListener('DOMContentLoaded', () => {
    const slidesData = [
      { src: 'https://i.ibb.co/3F8WFzz/pessoas-se-exercitando-para-ter-uma-vida-saudavel.jpg', description: ' Pratique Atividade Física Regular' },
      { src: 'https://i.ibb.co/gJPQrF2/original-b1df092d5feda2cf92a1f6f75653577f.webp', description: 'Mantenha-se Hidratado' },
      { src: 'https://i.ibb.co/NCM77Ck/OIP.jpg', description: 'Priorize o Sono de Qualidade' },
      { src: 'https://i.ibb.co/VvV40Dn/Gerenciamento-do-Estresse-1024x707.jpg', description: 'Gerencie o Estresse' },
      { src: 'https://i.ibb.co/qBPRhn1/desconexao5.webp', description: 'Cultive Conexões Sociais' },
    ];
  
    const carouselTrack = document.querySelector('.carousel-track');
  
    const createSlide = ({ src, description }) => {
      const slideElement = document.createElement('div');
      slideElement.className = 'slide';
  
      const imgElement = document.createElement('img');
      imgElement.src = src;
      imgElement.alt = description;
  
      const overlayElement = document.createElement('div');
      overlayElement.className = 'overlay';
      overlayElement.textContent = description;
  
      slideElement.append(imgElement, overlayElement);
      return slideElement;
    };
  
    const populateCarouselTrack = (slides) => {
      const fragment = document.createDocumentFragment();
      slides.forEach(slide => fragment.appendChild(createSlide(slide)));
  
      // Duplicar slides para criar efeito de loop contínuo
      slides.forEach(slide => fragment.appendChild(createSlide(slide)));
  
      carouselTrack.appendChild(fragment);
  
      const slideWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--slide-width'));
      const gapWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--gap-width'));
      const totalWidth = (slideWidth + gapWidth) * slides.length;
      const duplicatedTotalWidth = totalWidth * 2;
      const halfTotalWidth = duplicatedTotalWidth / 2;
  
      // Definir propriedades CSS
      carouselTrack.style.setProperty('--total-width', `${halfTotalWidth}px`);
  
      // Calcular duração da rolagem com base na largura e duração base
      const baseDuration = 60; // segundos
      const baseWidth = 5000; // largura base para calcular a duração
      const scrollDuration = (halfTotalWidth / baseWidth) * baseDuration;
  
      carouselTrack.style.setProperty('--scroll-duration', `${scrollDuration}s`);
    };
  
    populateCarouselTrack(slidesData);
  });
  