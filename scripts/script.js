(() => {
  const swiper = new Swiper('#es-rc .es-swiper', {
    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '#es-rc .es-swiper-pagination',
    },

    navigation: {
      nextEl: '#es-rc .es-swiper-button-next',
      prevEl: '#es-rc .es-swiper-button-prev',
    },
  });
})();
