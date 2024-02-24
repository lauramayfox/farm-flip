//JS Game board functions followed & adapted by Javascript Academy & Code Sketch tutorials - YouTube 

//Variable values not being changed, constant
const cards = document.querySelectorAll('.farm-card')
//Event listener for when card is clicked
cards.forEach(card => card.addEventListener('click', flipCard)); shuffle();
//Moves counter
const moveContainer = document.querySelector(".moves");

//Knowing which card flips first to make a match
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
let moves = 0;

//Score count feature Javascript Academy tutorial
moves = 0;
moveContainer.innerHtml = 0;

function addMove() {
moves++;
moveContainer.innerHTML = moves;
}



//Declaring functions
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add('flip');

//Adding a condition
if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
}
//On second click
secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
    
    addMove();

}

function disableCards () {
firstCard.removeEventListener('click', flipCard);
secondCard.removeEventListener('click', flipCard);

resetBoard();
}

function unflipCards () {
lockBoard = true;

setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
//time before unmatched cards get flipped back over
    resetBoard();
  }, 1400);
}

function shuffle() {
    cards.forEach(card => {
      let randomPos = Math.floor(Math.random() * 12);
      card.style.order = randomPos;
    }) }

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];

}
//Restart Game Button adaption of Javascript Academy tutorial
function restart() {
     setTimeout(() => {
    moves = 0;
    moveContainer.innerHTML = 0;
    flippedCard = false;
    hasFlippedCard = false;
    [firstCard, secondCard] = [null, null];
    cards.forEach(cardReset => cardReset.classList.remove('flip'));
    shuffle();
    cards.forEach(card => card.addEventListener('click', flipCard));
}, 300);
}