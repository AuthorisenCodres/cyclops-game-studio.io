document.addEventListener('DOMContentLoaded', function() {
  // Анимация при скролле
  const animateOnScroll = () => {
      const elements = document.querySelectorAll('.slide-in, .flip-in, .slide-up');
      
      elements.forEach(element => {
          const elementPosition = element.getBoundingClientRect().top;
          const screenPosition = window.innerHeight / 1.3;
          
          if (elementPosition < screenPosition) {
              element.style.opacity = '1';
              element.style.transform = 'translateY(0)';
          }
      });
  };
  
  // Запуск анимации при загрузке
  animateOnScroll();
  
  // Запуск анимации при скролле
  window.addEventListener('scroll', animateOnScroll);
  
  // Плавная прокрутка для якорных ссылок
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 80,
                  behavior: 'smooth'
              });
          }
      });
  });
  
  // Анимация наведения на карточки
  const cards = document.querySelectorAll('.game-card, .team-member');
  cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-10px)';
          this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
      });
      
      card.addEventListener('mouseleave', function() {
          this.style.transform = '';
          this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
      });
  });
  
  // Анимация кнопок
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
      button.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-3px)';
          this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
      });
      
      button.addEventListener('mouseleave', function() {
          this.style.transform = '';
          this.style.boxShadow = '';
      });
  });
});