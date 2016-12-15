
'use strict'
var allProducts = [];
var names = ['bag','banana','bathroom','boots','bubblegum','chair','cthulhu','dog_duck','dragon','pen','pet_sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water_can','wine_glass'];
var clickCounter = 0;
var leftImg = document.getElementById('left');
var rightImg = document.getElementById('right');
var centerImg = document.getElementById('center');
// var container_box = document.getElementById('img_container');


// var img_container = document.getElementById('img_container');
console.log(allProducts);

function ImageMaker(fileName) {
  this.filePath = 'img/' + fileName + '.jpg',
  this.fileName = fileName;
  this.clicks = 0;
  this.views = 0;
  allProducts.push(this);
}//end of imageMaker function
//////////////////////////////////////////////////////////////////////////
// function allImages() {
for(var i = 0; i < names.length; i++) {
  new ImageMaker(names[i]);
}
// new ImageMaker('img/bag.jpg','bag');
// new ImageMaker('img/banana.jpg','banana');
// new ImageMaker('img/bathroom.jpg','bathroom');
// new ImageMaker('img/boots.jpg','boots');
// new ImageMaker('img/bubblegum.jpg','bubblegum');
// new ImageMaker('img/chair.jpg','chair');
// new ImageMaker('img/cthulhu.jpg','cthulhu');
// new ImageMaker('img/dog_duck.jpg','dogduck');
// new ImageMaker('img/dragon.jpg','dragon');
// new ImageMaker('img/pen.jpg','pen');
// new ImageMaker('img/pet_sweep.jpg','petsweep');
// new ImageMaker('img/scissors.jpg','scissors');
// new ImageMaker('img/shark.jpg','shark');
// new ImageMaker('img/sweep.jpg','sweep');
// new ImageMaker('img/tauntaun.jpg','tauntaun');
// new ImageMaker('img/unicorn.jpg','unicorn');
// new ImageMaker('img/usb.jpg','usb');
// new ImageMaker('img/water_can.jpg','watercan');
// new ImageMaker('img/wine_glass.jpg','wine');
// }

// allImages();

/////////////////////////////////////////////////////////////show three random pics

function selectRandomPic(event) {
  if(event){
    event.preventDefault();
    updateClickCount(event.target.src);
    if(event.target.id === 'img_container'){
      return alert('CLICK ON A PICTURE!!!! NOT THE BACKGROUND!!!');
    }
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
    showChart();
  }else{
    // console.log(clickCounter);
    var show = document.getElementById('show');///show button
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

  if(!localStorage.getItem('jennifer')){
    localStorage.setItem('jennifer',JSON.stringify(allProducts));
  } else {
    var retrievedData = localStorage.getItem('jennifer');
    var allProducts2 = JSON.parse(retrievedData);
    localStorage.setItem('jennifer',JSON.stringify(allProducts2));
  }//end of imageMaker function
}

leftImg.addEventListener('click', selectRandomPic);

rightImg.addEventListener('click', selectRandomPic);

centerImg.addEventListener('click', selectRandomPic);
////////////////////////////////percentage
var result = document.getElementById('result');
function displayResult() {
  result.innerHTML = '';
  for (var i = 0; i < allProducts.length; i++) {
    var percentage = Math.round(allProducts[i].clicks/allProducts[i].views * 100);

    var liEl = document.createElement('li');

    liEl.textContent = allProducts[i].fileName + ' has been clicked ' + allProducts[i].clicks + ' times and viewed ' + allProducts[i].views + ' times. Percentage of clicks when viewed: ' + percentage + '%'

    result.appendChild(liEl);

  }
}


function showChart(){
  var totalClicks = [];
  var totalViews = [];
  var productName = [];
  for(var i = 0; i<allProducts.length;i++){
    // var calViews = allProducts[i].views;
    totalViews.push(allProducts[i].views);
    // totalViews.push(calViews);
    // var calClicks =allProducts[i].click;
    totalClicks.push(allProducts[i].clicks);
    productName.push(allProducts[i].fileName);
    // totalClicks.push(calClicks);

  }
  var ctx = document.getElementById('bar_chart').getContext('2d');
  var bar_chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels:productName,
    //  ['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'],
      datasets: [{
        label: 'views',
        data: totalViews,
        backgroundColor: 'rgba(153,255,51,0.4)'
      }, {
        label: 'clicks',
      // data: [2, 29, 5, 5, 2, 3, 10,2, 29, 5, 5, 2, 3, 10,2, 29, 5, 5, 2, 3],
        data: totalClicks,
        backgroundColor: 'rgba(255,153,0,0.4)'
      }]
    }
  });
}
