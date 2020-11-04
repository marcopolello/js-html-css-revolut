/*
$(document).ready(function(){


  $('li.dropitem').each(function(indice, elemento){
    $(this).click(function() {
      // console.log("hai cliccato correttamente");
      // console.log(indice, elemento); //elemento = $(this)
      if (indice === 0) {
        $('#dd1').toggle();
      } else if (indice === 1) {
        $('#dd2').toggle().css("left", "-20px");
      } else if (indice === 2) {
        $('#dd3').toggle().css("left", "-15px");
      } else if (indice === 3) {
        $('#dd4').toggle().css("left", "-13px");
      } else if (indice === 4) {
        $('#dd5').toggle().css("left", "-18px");
      } else if (indice === 5) {
        $('#dd6').toggle().css("left", "-13px");
      }
    });

  });

}); */


// 2 METODO (risolto bug per cui non si chiudeva menu all'apertura di un altro)


$(document).ready(function () {

 var dropItem =  $(".dropitem");
 //funzione che parte al click di un <li> con classe .dropitem
 dropItem.click(function () {
   // ogni volta che clicco un li tutti gli li di classe .dropdown salgono
   $(".dropdown").slideUp();
   // al click dello stesso va su e giù
   $(this).children(".dropdown").toggle();
 });

 // cambio proprietà css dei menu dropdown tramite selezione id
 $('#dd2').css("left", "-20px");
 $('#dd3').css("left", "-15px");
 $('#dd4').css("left", "-13px");
 $('#dd5').css("left", "-18px");
 $('#dd6').css("left", "-13px");

}); 
