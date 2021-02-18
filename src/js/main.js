var elem = document.querySelector('.slider-container');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  fade: true,
  draggable: false,
  autoPlay: 123456,
  pageDots: false,
  pauseAutoPlayOnHover: false,
});



// Simple Parallax JS
// const simpleParallax = require('simple-parallax-js');

const image1 = document.getElementsByClassName('img-1');
new simpleParallax(image1, {
  delay: 3,
  orientation: 'down',
  overflow: true
 
});

const image2 = document.getElementsByClassName('img-2');
new simpleParallax(image2, {
  delay: 3,
  orientation: 'up',
  overflow: true
});


const parallax_image2 = document.getElementsByClassName('parallax-image2');
new simpleParallax(parallax_image2, {
  delay: 8,
  orientation: 'up',
  overflow: true
});
const parallax_image3 = document.getElementsByClassName('parallax-image3');
new simpleParallax(parallax_image3, {
  delay: 4,
  orientation: 'up',
  overflow: true
});
