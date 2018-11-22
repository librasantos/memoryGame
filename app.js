/*
 * Create a list that holds all of your cards
 */
var cardsGroup=["fa fa-diamond", "fa fa-diamond", "fa fa-paper-plane-o", "fa fa-paper-plane-o","fa fa-anchor", "fa fa-anchor", "fa fa-bolt", "fa fa-bolt", "fa fa-cube", "fa fa-cube", "fa fa-leaf", "fa fa-leaf", "fa fa-bicycle", "fa fa-bicycle", "fa fa-bomb", "fa fa-bomb"];
shuffle(cardsGroup);
var ulo=document.createElement('ul'); //Creates Ul with class deck
ulo.classList.add("deck");
var openCards=[]; // stores open cards
var counter=0;


for (var i=0;i<cardsGroup.length;i++){   //loop to create cards dynamic list
  var lista=document.createElement('li');
  lista.classList.add("card");

  var cardClass = cardsGroup[i]
  element =document.createElement("i");// need to fix this so it takes the symbol

  var cssClasses = cardClass.split(" ");
  cssClasses.forEach(function(cssClass) {
  element.classList.add(cssClass);
  });

  lista.appendChild(element);
  ulo.appendChild(lista);
}
document.body.appendChild(ulo);

//Create Stars -li elements dynamically
var starsGroup=[];
for (var k=0; k<cardsGroup.length;k++){ // Creates li array
  starsGroup.push("fa fa-star");
}

for (var j=0;j<starsGroup.length;j++){   //loop to create dynamic list
  var listar=document.createElement('li');

  var starClass = starsGroup[j];
  elementStar =document.createElement("i");// need to fix this so it takes the symbol

  var cssStarClasses = starClass.split(" ");
  cssStarClasses.forEach(function(cssStarClass) {
  elementStar.classList.add(cssStarClass);
  });

  listar.appendChild(elementStar);
  document.getElementsByClassName("stars")[0].appendChild(listar);
}

//Event listener - calls functions
let cards= document.querySelectorAll(".card");
for (let i=0;i<cards.length;i++){
      let card = cards[i];
      card.addEventListener("click", function(){
        flipCard(card);
        saveOpenCards(card);
        checkMatch(card);
        countClicks();
        gameCounter;
      });
}


function flipCard(card){
  card.classList.add("open","show");
}

function saveOpenCards(card){
  openCards.push(card);
}

function checkMatch(card){
  if (openCards.length == 1){
    return;
  }

  var firstCard = openCards[0]
  var iconFirstCard = firstCard.firstChild
  var iconSecondCard = card.firstChild

  if (iconFirstCard.classList.value == iconSecondCard.classList.value){
    firstCard.classList.add("match");
    card.classList.add("match");
  }
  else {
    firstCard.classList.add("open","show","nonmatch");
    card.classList.add("open","show","nonmatch");
    setTimeout(function(){
      firstCard.classList.remove("open","show","nonmatch");
      card.classList.remove("open","show","nonmatch");
    }, 1000);

  }

  openCards = []
}
function countClicks(){
  counter=counter+1; //counts all clicks
  var move=document.querySelectorAll(".moves")[0];
  move.innerHTML =counter;
  if (counter<=cardsGroup.length)
  {
  document.getElementsByClassName(starClass)[0].remove(); // removes star as counter increases
}
}
//Timer




// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
