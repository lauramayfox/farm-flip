//Variable values not being changed, constant
const cards = document.querySelectorAll('.farm-card')
cards.forEach(card => card.addEventListener('click', flipCard));

//Knowing which card flips first to make a match
let hasFlippedCard = false;
let firstCard, secondCard;


function flipCard() {
    this.classList.add('flip');

//Adding a condition
if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
}
secondCard = this;
    
}

function checkForMatch() {
    let isMatch =
}