//Variable values
const cards = document.querySelectorAll(".farm-card");
//Moves counter
const moveContainer = document.querySelector(".moves");
//Rules Button
const openModalButton = document.querySelectorAll("[data-modal-target]");
const closeModalButton = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

//Changeable variable values
let totalNumberOfCards = cards.length;
//Knowing which card flips first to make a match
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
let moves = 0;
let revealedCards = 0;

//Event listener for when card is clicked
cards.forEach((card) => card.addEventListener("click", flipCard));
shuffle();

//Event Listener for Buttons open/close Web Dev Simplified tutorial - Youtube
openModalButton.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});
//Closes modal when clicking outside the modal box Web Dev Simplified tutorial - Youtube
overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButton.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) {
    return;
  }
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) {
    return;
  }
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

//Score count adaptation feature - Javascript Academy tutorial Youtube
moves = 0;
moveContainer.innerHtml = 0;

function addMove() {
  moves++;
  moveContainer.innerHTML = moves;
}
//Code Sketch Lab adaptation - Youtube
function flipCard() {
  if (lockBoard) {
    return;
  }
  if (this === firstCard) {
    return;
  }
  this.classList.add("flip");

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
  let isMatch = firstCard.dataset.identifier === secondCard.dataset.identifier;
  if (isMatch) {
    disableCards();
    revealedCards += 2;
  } else {
    unflipCards();
  }
  addMove();
  if (revealedCards === totalNumberOfCards) {
    endGame();
  }
}



function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    //time before unmatched cards get flipped back over
    resetBoard();
  }, 1400);
}

function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
}

function resetBoard() {
  hasFlippedCard = false;
  lockBoard = false;
  firstCard = null;
  secondCard = null;
}
//Restart Game Button adaption of Javascript Academy tutorial YouTube
function restart() {
  setTimeout(() => {
    moves = 0;
    moveContainer.innerHTML = 0;
    hasFlippedCard = false;
    firstCard = null;
    secondCard = null;
    cards.forEach((cardReset) => cardReset.classList.remove("flip"));
    shuffle();
    cards.forEach((card) => card.addEventListener("click", flipCard));
  }, 300);
}

//End game to trigger alert and reset cards
function endGame() {
  setTimeout(() => {
    cards.forEach((card) => card.classList.remove("flip"));
    resetBoard();
    alert("Win!");
    restart();
  }, 1500);
}
