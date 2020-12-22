$(function(){
    $('li.nav-link2').on('click', (e) => {
      $('li.nav-link2').removeClass('backgroundlink');
      $(e.currentTarget).addClass('backgroundlink');
    })
  });