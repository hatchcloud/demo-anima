$(document).ready(pagina_lista());

function pagina_lista() {

  $("#texto-md").delay(1000).animate({top: "0px"}, 800);
  $("#texto-bg").delay(1000).animate({bottom: "0px"}, 800);

  let carrusel = $("#carrusel");
  let cardWidth = carrusel.find(".product").outerWidth();
  let currentPosition = 0;

  // Mueve el carrusel hacia la derecha
  $(".arrow-right").on("click", function() {
    carrusel.animate({left: currentPosition - cardWidth + "px"}, {
      duration: 500,
      easing: "linear",
      complete: function() {
        carrusel.find(".product:first-child").appendTo(carrusel);
        currentPosition -= cardWidth;
        carrusel.css("left", currentPosition + "px");
      }
    });
  });
  
  // Mueve el carrusel hacia la izquierda
  $(".arrow-left").on("click", function() {
    carrusel.animate({left: currentPosition - cardWidth + "px"}, {
      duration: 500,
      easing: "linear",
      complete: function() {
        carrusel.find(".product:first-child").appendTo(carrusel);
        currentPosition -= cardWidth;
        carrusel.css("left", currentPosition + "px");
      }
    });
  });

}


$(window).scroll(function() {
  // Obtener la posición actual del scroll
  let scrollPos = $(this).scrollTop();

  // Obtener la posición de la sección en relación con la parte superior de la página
  let sectionPos = $('.carrusel-sec').offset().top;

  // Si la posición del scroll es mayor o igual a la posición de la sección menos el alto de la ventana
  // significa que el scroll ha llegado a la sección
  if (scrollPos >= (sectionPos - $(window).height())) {
    $('.carrusel-sec').addClass('active');
  } else {
    $('.carrusel-sec').removeClass('active');
  }

});
