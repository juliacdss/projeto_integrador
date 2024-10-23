document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carouselExampleCaptions');
  
    const showCaption = (event) => {
      const activeCaption = event.relatedTarget.querySelector('.carousel-caption');
      activeCaption.classList.add('active');
    };
  
    const hideCaptions = (event) => {
      const captions = event.target.querySelectorAll('.carousel-caption');
      captions.forEach((caption) => caption.classList.remove('active'));
    };
  
    carousel.addEventListener('slide.bs.carousel', hideCaptions);
    carousel.addEventListener('slid.bs.carousel', showCaption);
  
    const initialCaption = carousel.querySelector('.carousel-item.active .carousel-caption');
    initialCaption.classList.add('active');
  });
  