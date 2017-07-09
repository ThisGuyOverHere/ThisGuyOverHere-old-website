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

}
