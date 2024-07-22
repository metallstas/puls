const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    navPosition: 'bottom',
    controls: false,
    nav: true,
    
  });

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });

  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });
