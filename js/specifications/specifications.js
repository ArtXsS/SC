document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },

        effect: 'slide',
        speed: 600,
    });

    // Модальное окно
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const images = document.querySelectorAll('.swiper-image');
  let currentIndex = 0;

  images.forEach(img => {
    img.addEventListener('click', function() {
      modal.style.display = 'block';
      modalImg.src = this.src;
      currentIndex = parseInt(this.dataset.index);
    });
  });

  document.querySelector('.modal-close').addEventListener('click', () => {
    modal.style.display = 'none';
  });

  document.querySelector('.modal-prev').addEventListener('click', function(e) {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImg.src = images[currentIndex].src;
  });

  document.querySelector('.modal-next').addEventListener('click', function(e) {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % images.length;
    modalImg.src = images[currentIndex].src;
  });

  // Закрытие по клику вне изображения
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Закрытие по ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      modal.style.display = 'none';
    }
  })

  //Валидация телефона в модальном окне
  const phoneInput = document.querySelector('.phone-form__input');
  const submitButton = document.querySelector('.phone-form__button');
  const phoneError = document.querySelector('.phone-error');

  submitButton.disabled = true;

  phoneInput.addEventListener('input', function() {
    const value = this.value.replace(/\D+/g, '');
    let formattedValue = '';
    
    if (value.length > 0) {
      formattedValue = '+7 (';
      if (value.length > 1) formattedValue += value.substring(1, 4);
      if (value.length >= 4) formattedValue += ') ' + value.substring(4, 7);
      if (value.length >= 7) formattedValue += '-' + value.substring(7, 9);
      if (value.length >= 9) formattedValue += '-' + value.substring(9, 11);
    }
    
    this.value = formattedValue;
    
    const isValid = value.length === 11 && value[0] === '7';
    
    submitButton.disabled = !isValid;
    phoneError.style.display = isValid ? 'none' : 'block';
  });

  document.querySelector('.phone-form__container').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const cleanPhone = phoneInput.value.replace(/\D+/g, '');
    if (cleanPhone.length !== 11 || cleanPhone[0] !== '7') {
      phoneError.style.display = 'block';
      submitButton.disabled = true;
      return;
    }
  });

  //Модальное окно
  const modal__specifications = document.querySelector('.modal__specifications');
  const backdrop = document.querySelector('.modal-backdrop');
  const closeBtn = document.getElementById('closeModal');
  const openBtn = document.querySelector('.specification__btn');

  function openModal() {
      backdrop.style.display = 'block';
      modal__specifications.style.display = 'block';
      
      setTimeout(() => {
          backdrop.classList.add('active');
          modal__specifications.classList.add('active');
      }, 10);
  }

  function closeModal() {
      backdrop.classList.remove('active');
      modal__specifications.classList.remove('active');
      
      setTimeout(() => {
          backdrop.style.display = 'none';
          modal__specifications.style.display = 'none';
      }, 500); 
      
      document.body.style.overflow = '';
  }

  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);

  backdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal__specifications.classList.contains('active')) {
          closeModal();
      }
  });


  //Бургер меню
  const burger = document.querySelector('.burger-menu');
  const nav = document.querySelector('nav');
  const body = document.body;
        
  burger.addEventListener('click', function() {
    this.classList.toggle('active');
    nav.classList.toggle('active');
    body.classList.toggle('menu-open');
  });
        
  document.querySelectorAll('.list__items a').forEach(link => {
    link.addEventListener('click', function() {
    burger.classList.remove('active');
    nav.classList.remove('active');
    body.classList.remove('menu-open');
  });
});
})