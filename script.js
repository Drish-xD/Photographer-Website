// tooltip

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

//  hamburger Animation

$(document).ready(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("close");
  });
});

// Parallax Effext

var image = document.getElementsByClassName("main-img");
new simpleParallax(image);

var image = document.getElementsByClassName("picture");
new simpleParallax(image, {
  delay: 0.6,
  transition: "cubic-bezier(0,0,0,1)",
});

// AOS

AOS.init({
  once: false,
  duration: 1500,
  anchorPlacement: 'center-bottom',
  easing: "ease-in-out",
  mirror: "true",
});
