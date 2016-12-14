
/////////////////////////////////////////////////////////
// console.log('-----------');
// console.log(oldArray, 'old array');
// console.log(newArray, 'new array');

// for (var i=0; i<100; i++) {
//   makeArrayOfThreeNumbers();
//   console.log('----New Run of making an array-------');
//   console.log(oldArray, 'old array');
//   console.log(newArray, 'new array');
//
// }//test code for dupes
////////////////////////////////////////////////
// function showThreePics() {
//   // this will place three new images on the page
//   makeArrayOfThreeNumbers();
//   left.src = allProducts[newArray[0]].filePath;
//   allProducts[newArray[0]].views+=1;
//   center.src = allProducts[newArray[1]].filePath;
//   allProducts[newArray[1]].views+=1;
//   right.src = allProducts[newArray[2]].filePath;
//   allProducts[newArray[2]].views+=1;
//
// }

// function renderList() {
  // display a list of items and total clicks/views
// }

// function handleClick(event) {
//   event.preventDefault();
//   // identify who was clicked
//   console.log(event.target, 'was clicked');//tracking which image was clicked
//   // alert for clicks not on images
//   if(event.target.id === 'pic-container') {
//     alert('Click on a PIC!');
//   }
//   // tally the click
//   if(event.target.id==='left') {
//     allProducts[newArray[0]].click+=1;
//     console.log(allProducts[newArray[0]]);
//   }

  // if(event.target.id==='center') {
  //   allProducts[newArray[1]].click+=1;
  //   console.log(allProducts[newArray[1]]);
  // }

  // if(event.target.id==='right') {
  //   allProducts[newArray[2]].click+=1;
  //   console.log(allProducts[newArray[2]]);
  // }
  // console.table(allProducts);
  // // prevent duplicates// checked
  // // check whether total clicks <25
  // clickCount+=1;
  // console.log(clickCount, 'total clicks so far');
  // if (clickCount >25) {
  //   return alert('you are out of clicks');
  // }
  //after 25, remove event listeners on picNames

    //after 25, show "Results" button
    // clear old images
// display 3 new images

//   showThreePics();
// }
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++
// CODE THAT RUNS ON PAGE LOAD
// (EXECUTE ACTIONS)
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++

// showThreePics();
// picContainer.addEventListener('click', handleClick);


'use strict'
var allProducts = [];
// var clickCounter = 0;
var leftImg = document.getElementById('left');
var rightImg = document.getElementById('right');
var centerImg = document.getElementById('center');
var container_box = document.getElementById('img_container');
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
new ImageMaker('img/banana.jpg','banana');
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

function selectRandomPic() {
  var left = document.getElementById('left');
  var randomIndexLeft = Math.floor(Math.random() * allProducts.length);
  left.src=allProducts[randomIndexLeft].filePath;
  var leftItem = allProducts[randomIndexLeft];
  allProducts.splice(randomIndexLeft, 1);

  var center = document.getElementById('center');
  var randomIndexCenter = Math.floor(Math.random() * allProducts.length);
  center.src=allProducts[randomIndexCenter].filePath;
  var centerItem = allProducts[randomIndexCenter];

  var right = document.getElementById('right');
  allProducts.splice(randomIndexCenter,1);
  var randomIndexRight = Math.floor(Math.random() * allProducts.length);
  right.src=allProducts[randomIndexRight].filePath;
  var rightItem = allProducts[randomIndexRight];
  allProducts.push(leftItem,centerItem);
}
selectRandomPic();

// var selectImg = section.getElementsByTagName('img');
// selectImg.addEventListener('click', selectRandomPic);


leftImg.addEventListener('click', selectRandomPic);

rightImg.addEventListener('click', selectRandomPic);

centerImg.addEventListener('click', selectRandomPic);



function clickHandler(event) {
  event.preventDefault();
  if(event.target.id === 'img_container'){
    return alert('Please click on the image. Not the surrounding area.')
  }
}








container_box.addEventListener('click',clickHandler);

// var newArray
////////////////////////////////////////////////////////////////////

// while(leftRandomIndex===centerRandomIndex||leftRandomIndex===rightRandomIndex||centerRandomIndex===rightRandomIndex){
//   var leftRandomIndex = Math.floor(Math.random()*allProducts.length);
//   var centerRandomIndex = Math.floor(Math.random()*allProducts.length);
//   var rightRandomIndex = Math.floor(Math.random()*allProducts.length);
// }


// function clickHandler(event) {
//   event.preventDefault();
//
//     if(event.target.src==='img_container'){
//       alert('Please click on an image');
//     }else{
//       console.log(event.target.id);
//       clicks += 1;
//
//    }
//     if (event.target.src===allProducts[leftRandomIndex]){
//
//       if(count===25) {
//         return false;
//       }
//     }
//   }
//
// img_container.addEventListener('click',clickHandler);
