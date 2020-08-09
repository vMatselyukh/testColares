$(document).ready(function(){
  $('.slider-hero').slick({
    arrows: false,
    dots: true,
    // fade: true,
    autoplay: 2000
  })
});

document.querySelector('.menu__burger').addEventListener('click', function(){
  document.querySelector('.menu__burger').classList.toggle('active');
  document.querySelector('.menu__list').classList.toggle('active');
})

document.querySelector('.menu-dropdown__item-sub').addEventListener('click', function() {
  document.querySelector('.submenu').classList.toggle('active');
})

// $(function(){
//   $('.menu__burger').click(function(event) {
//     $('.menu__burger, .menu__list').toggleClass('active');
//   })
// })