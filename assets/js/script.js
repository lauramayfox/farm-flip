//Variable values not being changed, constant
const cards = document.querySelectorAll('.farm-card')
cards.forEach(card => card.addEventListener('click', flipCard));

//Knowing which card flips first to make a match
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

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


}

function disableCards () {
firstCard.removeEventListener('flip');
secondCard.removeEventListener('flip');

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