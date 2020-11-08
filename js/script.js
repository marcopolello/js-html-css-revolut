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
 $('#dd1').css("left", "-50px");
 $('#dd2').css("left", "-70px");
 $('#dd3').css("left", "-65px");
 $('#dd4').css("left", "-60px");
 $('#dd5').css("left", "-70px");
 $('#dd6').css("left", "-75px");


 // SEZIONE MENU-HAMBURGER
 var openHamburger = $("#logo-hamb");
 var closeHamburger = $("#logo-close");
 //funzione che apre menu Hamburger
 openHamburger.click(function() {
  $(".hamburger-menu").addClass("dispblock");
 });
 // funzione che chiude menu e torna ad icona Hamburger
 closeHamburger.click(function() {
  $(".hamburger-menu").removeClass("dispblock");
 });

});
