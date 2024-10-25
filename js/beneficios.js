document.addEventListener('DOMContentLoaded', () => {
    const slidesData = [
      { src: 'https://i.ibb.co/GMp09Q9/Sem-t-tulo.jpg', description: 'Saúde Cardiovascular' },
      { src: 'https://i.ibb.co/nbvWDkT/Controle-do-peso-corporal-1.jpg', description: 'Controle de Peso Corporal' },
      { src: 'https://i.ibb.co/mcQpZtt/como-melhorar-a-digestao.webp', description: 'Melhora da digestão' },
      { src: 'https://i.ibb.co/pRHDFhx/sistema-imunologico.jpg', description: 'Fortalecimento do sistema imunológico' },
      { src: 'https://i.ibb.co/tKtt2bt/Sa-de-mental-no-ensino-superior.webp', description: 'Melhora da saúde mental' },
      { src: 'https://i.ibb.co/nfb78L6/2963-DIADOSONO.jpg', description: 'Melhora da qualidade do sono' },
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
  