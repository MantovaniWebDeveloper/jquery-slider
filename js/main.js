/**VERSIONE AVANZATA MIA DELLO SLIDER DINAMICO!! **/
//creo un array di oggetti vuoti dove conterro le future
//card news
var arrayGallery = [];
//genero gli oggetti car e li pusho nell'array
var card1 = {
  "imgSrc" : "https://www.f1sport.it/wp-content/uploads/2018/09/Antonio-Giovinazzi-02.jpg",
  "alt" : "antonio-Giovinazzi-alfa",
  "title" : "Prima uscita da pilota titolare sulla Alfa romeo sauber per Antonio Giovinazzi"
};
arrayGallery.push(card1);
var card2 = {
  "imgSrc" : "https://cdn-6.motorsport.com/images/amp/2QzDRWaY/s6/charles-leclerc-ferrari-sf71h-.jpg",
  "alt" : "leclerc-test-ferrari",
  "title" : "Leclerc subito velocissimo al debutto in Ferrari"
};
arrayGallery.push(card2);
var card3 = {
  "imgSrc" : "https://cdn-4.motorsport.com/images/amp/0rGk9Jy2/s6/pierre-gasly-red-bull-racing-r.jpg",
  "alt" : "gasly-test-pirelli-redbull",
  "title" : "Pierre Gasly pronto a lottare per il mondiale 2019 con Red Bull Honda"
};
arrayGallery.push(card3);
console.log(arrayGallery);
var sliderContainer= $('.sliderImmagini');

for (var i = 0; i < arrayGallery.length; i++) {
  var card = arrayGallery[i];
  console.log(card);
  //creo il tag img all'interno del div sliderContainer
  sliderContainer.append("<img>");
  //aggiugno gli attributi
  var img = $('img');

  img.attr({
    'src' : card.imgSrc,
    'alt' : card.alt
  });

  //aggiugno LE CLASSI
  $('img').addClass('elementoImg');
  $('img').first().addClass('active');
}
//creo le variabili base per andare avanti e indietro
//nello slider
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

});
