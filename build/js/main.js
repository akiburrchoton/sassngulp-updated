var elem = document.querySelector('.slider-container');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  fade: true,
  draggable: false,
  autoPlay: 5000,
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

// Parallax 3 Images JS
const parallax_image2 = document.getElementsByClassName('parallax-image2');
new simpleParallax(parallax_image2, {
  delay: 4,
  orientation: 'up',
  
  maxTransition: 85,
  overflow: true
});
const parallax_image3 = document.getElementsByClassName('parallax-image3');
new simpleParallax(parallax_image3, {
  delay: 4,
  orientation: 'up',
  overflow: true
});

var carousel_img = document.querySelector('.image-contents');
var flkty = new Flickity( carousel_img, {
  // options
  cellAlign: 'left',
  contain: true,
  prevNextButtons: false,
  pageDots: false,
});

// Image Gallery JS

var gallery_carosel = document.querySelector('.gallery');
var flkty = new Flickity( gallery_carosel, {
  // options
  // cellAlign: 'left',
  contain: true,
  prevNextButtons: false,
  pageDots: false,
  wrapAround: true
});