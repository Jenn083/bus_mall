
'use strict'
var allProducts = [];

var clickCounter = 0;
var leftImg = document.getElementById('left');
var rightImg = document.getElementById('right');
var centerImg = document.getElementById('center');
// var container_box = document.getElementById('img_container');
// var clicks = 0;
// var totalViews = 0;
// var img_container = document.getElementById('img_container');
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
new ImageMaker('img/bag.jpg','bag');
new ImageMaker('img/banana.jpg','banana');
new ImageMaker('img/bathroom.jpg','bathroom');
new ImageMaker('img/boots.jpg','boots');
new ImageMaker('img/bubblegum.jpg','bubblegum');
new ImageMaker('img/chair.jpg','chair');
new ImageMaker('img/cthulhu.jpg','cthulhu');
new ImageMaker('img/dog_duck.jpg','dogduck');
new ImageMaker('img/dragon.jpg','dragon');
new ImageMaker('img/pen.jpg','pen');
new ImageMaker('img/pet_sweep.jpg','petsweep');
new ImageMaker('img/scissors.jpg','scissors');
new ImageMaker('img/shark.jpg','shark');
new ImageMaker('img/sweep.jpg','sweep');
new ImageMaker('img/tauntaun.jpg','tauntaun');
new ImageMaker('img/unicorn.jpg','unicorn');
new ImageMaker('img/usb.jpg','usb');
new ImageMaker('img/water_can.jpg','watercan');
new ImageMaker('img/wine_glass.jpg','wine');
// }

// allImages();

/////////////////////////////////////////////////////////////

function selectRandomPic(event) {
  if(event){
    event.preventDefault();
    updateClickCount(event.target.src);
  }
  if(clickCounter < 26){
    clickCounter += 1;

    var left = document.getElementById('left');
    var randomIndexLeft = Math.floor(Math.random() * allProducts.length);
    left.src=allProducts[randomIndexLeft].filePath;
    console.log(allProducts[randomIndexLeft].filePath);
    allProducts[randomIndexLeft].views += 1;
    var leftItem = allProducts[randomIndexLeft];
    allProducts.splice(randomIndexLeft, 1);

    var center = document.getElementById('center');
    var randomIndexCenter = Math.floor(Math.random() * allProducts.length);
    center.src=allProducts[randomIndexCenter].filePath;
    allProducts[randomIndexCenter].views += 1;
    var centerItem = allProducts[randomIndexCenter];

    var right = document.getElementById('right');
    allProducts.splice(randomIndexCenter,1);
    var randomIndexRight = Math.floor(Math.random() * allProducts.length);
    right.src=allProducts[randomIndexRight].filePath;
    allProducts[randomIndexRight].views += 1;
    // var rightItem = allProducts[randomIndexRight];
    allProducts.push(leftItem,centerItem);
  }else{
    // console.log(clickCounter);
    var show = document.getElementById('show');
    show.addEventListener('click',displayResult);
    document.getElementById('show').style.visibility='visible';
  }
}

selectRandomPic();

function updateClickCount(src) {
//find an item from allProducts[] that has a filePath that equals src
  for(var i = 0; i < allProducts.length; i++) {
    if( src.indexOf(allProducts[i].filePath) > 0){
      allProducts[i].clicks += 1;
    }
  }
}


leftImg.addEventListener('click', selectRandomPic);

rightImg.addEventListener('click', selectRandomPic);

centerImg.addEventListener('click', selectRandomPic);



var result = document.getElementById('result');
function displayResult() {
  result.innerHTML = '';
  for (var i = 0; i < allProducts.length; i++) {
    var liEl = document.createElement('li');
    var liEl2 = document.createElement('li');
    liEl.textContent = allProducts[i].fileName + ' has been clicked ' + allProducts[i].clicks + ' times';
    liEl2.textContent = allProducts[i].fileName + ' has been viewed ' + allProducts[i].views + ' times';
    result.appendChild(liEl);
    result.appendChild(liEl2);
  }
}
