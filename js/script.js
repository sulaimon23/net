var loadR;

function loadRR() {
 loadR = setTimeout(showPage, 2000);
}

function showPage() {
 document.getElementById("loadPage").style.display = "none";
 document.getElementById("body").style.height = "100% !important";
 document.getElementById("root").style.display = "block";
}

ScrollReveal().reveal('.services');


$(window).scroll(function () {
 $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
 scrollFunction()
};

function scrollFunction() {
 if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  mybutton.style.display = "block";
 } else {
  mybutton.style.display = "none";
 }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
 document.body.scrollTop = 0;
 document.documentElement.scrollTop = 0;
};


/*
    Carousel
*/
$('#carousel-example').on('slide.bs.carousel', function (e) {
 /*
     CC 2.0 License Iatek LLC 2018 - Attribution required
 */
 var $e = $(e.relatedTarget);
 var idx = $e.index();
 var itemsPerSlide = 2;
 var totalItems = $('.carousel-item').length;

 if (idx >= totalItems - (itemsPerSlide - 1)) {
  var it = itemsPerSlide - (totalItems - idx);
  for (var i = 0; i < it; i++) {
   // append slides to end
   if (e.direction == "left") {
    $('.carousel-item').eq(i).appendTo('.carousel-inner');
   } else {
    $('.carousel-item').eq(0).appendTo('.carousel-inner');
   }
  }
 }
});