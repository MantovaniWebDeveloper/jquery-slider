//creo le variabili base per lo slider
var prossimo = $('.prossimo');
var precedente = $('.precedente');
var img = $('.sliderImmagini img');


prossimo.click(function(){
  //alert('ciao');
  //recuper la classe active sull'img
  var imgActive =$('.sliderImmagini img.active');
  //rimuovo la classe
  imgActive.removeClass('active');
  //variabilizzo la sucessiva
  var imgSucessiva = imgActive.next('img');
  //confronto il valore length della sucessiva e se diverso
  //da zero aggiungo alla successiva active se invece
  //è uguale a zero metto al primo elemnto active
  if(imgSucessiva.length != 0) {
    imgSucessiva.addClass('active');
    console.log(imgSucessiva);
  }
  else {
    img.first().addClass('active');
    console.log(img);
  }
});

precedente.click(function(){
  var imgActive =$('.sliderImmagini img.active');
  //rimuovo la classe
  imgActive.removeClass('active');
  //variabilizzo la precedente
  var imgPrecedente = imgActive.prev('img');
  //confronto il valore length della preceddente e se diverso
  //da zero aggiungo alla precedente active se invece
  //è uguale a zero metto al primo elemnto active
  if(imgPrecedente.length != 0) {
    imgPrecedente.addClass('active');
    console.log(imgPrecedente);
  }
  else {
    img.last().addClass('active');
    console.log(img);
  }

})
