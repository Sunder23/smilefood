let heroSlider = document.querySelector('.hero__slider')
if (heroSlider) {
  const heroSwiper = new Swiper(heroSlider, {
    slidesPerView: 1,
  })
}

let testimonialsSlider = document.querySelector('.testimonials_slider')
if (testimonialsSlider) {
  const testimonialsSwiper = new Swiper(testimonialsSlider, {
    breakpoints: {
      // when window width is >= 320px
      360: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 640px
      980: {
        slidesPerView: 4,
        spaceBetween: 20,
      }
    },
    navigation: {
      nextEl: '.testimonials_next',
      prevEl: '.testimonials_prev',
    },
    
    pagination: {
        el: '.testimonials_pagination',
        type: 'bullets',
      },
  })
}

const orderButton = document.querySelectorAll('.hero_btn');
const popup = document.querySelector('#popup');
const body = document.querySelector('body')
const orderForm = document.querySelector('#order-form');
const nameInput = document.querySelector('#name');
const phoneInput = document.querySelector('#phone');
const emailInput = document.querySelector('#email');
const submitButton = document.querySelector('#submit-button');
const closeButton = document.querySelector('.popup_close');


orderButton.forEach(element => {
  element.addEventListener('click', () => {
    popup.classList.add('active');
    body.classList.add('overflow');
  });
});

closeButton.addEventListener('click', () => {
  popup.classList.remove('active');
  body.classList.remove('overflow');
});
document.addEventListener('click', (event) => {
  if (!popup.contains(event.target) && !event.target.matches('.hero_btn')) {
    body.classList.remove('overflow');
    popup.classList.remove('active');
  }
});
orderForm.addEventListener('submit', (event) => {
  event.preventDefault();
  body.classList.remove('overflow');
  popup.classList.remove('active');
  nameInput.value = "";
  phoneInput.value = "";
  emailInput.value = "";
  submitButton.setAttribute('disabled', 'disabled');
});

[nameInput, phoneInput, emailInput].forEach((input) => {
  input.addEventListener('input', () => {
    if (nameInput.value && phoneInput.value && emailInput.value) {
      submitButton.removeAttribute('disabled');
    } else {
      submitButton.setAttribute('disabled', 'disabled');
    }
  });
});

const telInp = document.querySelectorAll('input[type="tel"]');

telInp.forEach(element => {
  element.addEventListener('input', () => {
    element.value = element.value.replace(/\D/g, ''); 
  });
});
