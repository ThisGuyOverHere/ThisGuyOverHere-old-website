var currentBtn = 0;

window.onload = function() {

  $('#btn-impianti').addClass("selected");

  $('#btn-impianti').click(function () {

    $('#btn-impianti').addClass("selected");
    $('#btn-prestazioni').removeClass("selected");

    $("#prestazioni").slideUp();
    $("#impianti").slideDown();

  });
  
  $('#btn-prestazioni').click(function () {

    $('#btn-prestazioni').addClass("selected");
    $('#btn-impianti').removeClass("selected");

    $("#impianti").slideUp();
    $("#prestazioni").slideDown();

  });
  
  $('.navbar-collapse a').click(function () {
      $(".navbar-collapse").collapse('hide');
  } );

  if (window.innerWidth <= 435) {
  
    $("#assistenza").text("Hai bisogno di noi?");
    $("#btn-assistenza").text("Richiedi Assistenza");

  }

  $(window).resize(function () {

      if (window.innerWidth <= 435) {
  
        $("#assistenza").text("Hai bisogno di noi?");
        $("#btn-assistenza").text("Richiedi Assistenza");

      } else {

        $("#assistenza").text("Hai bisogno del nostro aiuto?");
        $("#btn-assistenza").text("Richiedi Assistenza Tecnica");
      }

    }
  )

}
