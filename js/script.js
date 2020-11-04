$(document).ready(function(){

  $('li.dropitem').each(function(indice, elemento){
    $(this).click(function() {
      console.log("hai cliccato correttamente");
      console.log(indice, elemento); //elemento = $(this)
      $('nav.dropdown').removeClass('dispblock');
      if (indice === 0) {
        $('#dd1').toggleClass('dispblock');
      } else if (indice === 1) {
        $('#dd2').toggleClass('dispblock').css("left", "-20px");
      } else if (indice === 2) {
        $('#dd3').toggleClass('dispblock').css("left", "-15px");
      } else if (indice === 3) {
        $('#dd4').toggleClass('dispblock').css("left", "-13px");
      } else if (indice === 4) {
        $('#dd5').toggleClass('dispblock').css("left", "-18px");
      } else if (indice === 5) {
        $('#dd6').toggleClass('dispblock').css("left", "-13px");
      }

    });

  });

});
