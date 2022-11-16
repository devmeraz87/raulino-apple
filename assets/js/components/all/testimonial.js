const swiper = new Swiper(".mySwiper", {
  speed: 1000,
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}"><img data-cursor="-icon" src="./assets/img/client/client_${index + 1}.png" /></span>`;
    },
  },
});