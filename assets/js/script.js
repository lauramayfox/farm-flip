//Variable values
const cards = document.querySelectorAll('.farm-card')
var totalNumberOfCards = cards.length
//Moves counter
const moveContainer = document.querySelector(".moves");
//Rules Button
const openModalButton = document.querySelectorAll('[data-modal-target]')
const closeModalButton = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

//Knowing which card flips first to make a match
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
let moves = 0;
let revealedCards = 0;

//Event listener for when card is clicked
cards.forEach(card => card.addEventListener('click', flipCard)); shuffle();

//Event Listener for Buttons open/close Web Dev Simplified tutorial
openModalButton.forEach(button => {
    button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.modalTarget)
      openModal(modal)
    })
  })
  //Closes modal when clicking outside the modal box Web Dev Simplified tutorial 
  overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
      closeModal(modal)
    })
  })
  
  closeModalButton.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal')
      closeModal(modal)
    })
  })
  
  function openModal(modal) {
    if (modal == null) {
      return}
    modal.classList.add('active')
    overlay.classList.add('active')
  }
  
  function closeModal(modal) {
    if (modal == null) {
      return}
    modal.classList.remove('active')
    overlay.classList.remove('active')
  }



//Score count feature Javascript Academy tutorial
moves = 0;
moveContainer.innerHtml = 0;

function addMove() {
moves++;
moveContainer.innerHTML = moves;
}

function flipCard() {
    if (lockBoard) {
      return}
    if (this === firstCard) {
      return}
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
  
   revealedCards += 2
    if (revealedCards === totalNumberOfCards) {
    endGame();
    }
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
  hasFlippedCard = false;
  lockBoard = false;
  firstCard = null;
  secondCard = null;
}
//Restart Game Button adaption of Javascript Academy tutorial
function restart() {
     setTimeout(() => {
    moves = 0;
    moveContainer.innerHTML = 0;
    flippedCard = false;
    hasFlippedCard = false;
    firstCard = null;
    secondCard = null;
    cards.forEach(cardReset => cardReset.classList.remove('flip'));
    shuffle();
    cards.forEach(card => card.addEventListener('click', flipCard));
}, 300);
}

//End game
function endGame() {
  setTimeout(() => {
    cards.forEach(card => card.classList.remove('flip'));
    resetBoard();
    alert('Win! ');
  }, 1500); 
}