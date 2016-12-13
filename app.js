
'use strict'
var allProducts = [];
console.log(allProducts);

function ImageMaker(filePath,fileName) {
  this.filePath = filePath;
  this.fileName = fileName;
  this.clicks = 0;
  this.views = 0;
  allProducts.push(this);
}//end of imageMaker function
//////////////////////////////////////////////////////////////////////////
// function allImages() {
new ImageMaker('assets/bag.jpg','bag');
new ImageMaker('assets/banana.jpg','banana');
new ImageMaker('assets/bathroom.jpg','bathroom');
new ImageMaker('assets/boots.jpg','boots');
new ImageMaker('assets/breakfast.jpg','breakfast');
new ImageMaker('assets/bubblegum.jpg','bubblegum');
new ImageMaker('assets/chair.jpg','chair');
new ImageMaker('assets/cthulhu.jpg','cthulhu');
new ImageMaker('assets/dog-duck.jpg','dogduck');
new ImageMaker('assets/dragon.jpg','dragon');
new ImageMaker('assets/pen.jpg','pen');
new ImageMaker('assets/pet-sweep.jpg','petsweep');
new ImageMaker('assets/scissors.jpg','scissors');
new ImageMaker('assets/shark.jpg','shark');
new ImageMaker('assets/sweep.png','sweep');
new ImageMaker('assets/tauntaun.jpg','tauntaun');
new ImageMaker('assets/unicorn.jpg','unicorn');
new ImageMaker('assets/usb.gif','usb');
new ImageMaker('assets/water-can.jpg','watercan');
new ImageMaker('assets/wine-glass.jpg','wine');
// }

// allImages();



function selectRandomLeft() {
  var randomIndex= Math.floor(Math.random() * allProducts.length);
  console.log(allProducts[randomIndex]);
  var left = document.getElementById('left');
  // left.src = allProducts[randomIndex[0]].src;
  left.src=allProducts[randomIndex].filePath;
}
selectRandomLeft();

function selectRandomCenter() {
  var randomIndex= Math.floor(Math.random() * allProducts.length);
  console.log(allProducts[randomIndex]);
  var center = document.getElementById('center');
  // center.src = allProducts[randomIndex[1]].src;
  center.src=allProducts[randomIndex].filePath;
}
selectRandomCenter();

function selectRandomRight() {
  var randomIndex= Math.floor(Math.random() * allProducts.length);
  console.log(allProducts[randomIndex]);
  var right = document.getElementById('right');
  // right.src = allProducts[randomIndex[2]].src;
  right.src=allProducts[randomIndex].filePath;
}

selectRandomRight();
