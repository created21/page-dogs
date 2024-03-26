$(function () {

  document.querySelector('.burger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.menu__list').classList.toggle('open');
  });

  $('.arrow-up').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 600);
    return false;
  });
  
  $("ul a").on("click", function (event) {
    event.preventDefault();

    var id = $(this).attr('href');
    var targetOffset = $(id).offset().top;

    $('html, body').animate({
      scrollTop: targetOffset
    }, 600);
  });
});