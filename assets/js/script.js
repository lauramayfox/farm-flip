//Variable values not being changed, constant
const cards = document.querySelectorAll('.farm-card')
cards.forEach(card => card.addEventListener('click', flipCard));

//Knowing which card flips first to make a match
let hasFlippedCard = false;
let firstCard, secondCard;

//Declaring functions
function flipCard() {
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

}

function unflipCards () {

}

function shuffle() {
    
}

function resetBoard() {

}