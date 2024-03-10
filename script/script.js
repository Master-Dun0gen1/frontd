$('.carousel').slick({
    centerMode: true,
    centerPadding: '40px',
    prevArrow:'<img src="img/img2.png" alt="">',
    nextArrow: '<img src="img/img1.png" alt="">',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
let burger = document.querySelector('.burger-menu')
let nav = document.querySelector('.main-nav')
burger.addEventListener('click', function() {
    burger.classList.toggle('active')
    nav.classList.toggle('active') 
})