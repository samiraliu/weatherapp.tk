$(function() {
    var BV = new $.BigVideo();
    BV.init();
    BV.show('http://weatherapp.tk/bg.mp4');
});

(function() {
  new SliderFx( document.getElementById('slideshow'), {
    easing : 'cubic-bezier(.8,0,.2,1)'
  } );
})();
