// tooltip

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

//  hamburger Animation

  $(document).ready(function(){
    $('.hamburger').click(function(){
      $(this).toggleClass('close');
    });
  });