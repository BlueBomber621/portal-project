const gameTitle = document.querySelector(".gameTitle").querySelector("h1");
const cardArea = document.querySelector(".cardBox");
const cardItemTemp = document.querySelector(".template");
const cards = document.querySelectorAll(".card");
const restartBox = document.querySelector(".restart-box");

let maxMatches = 6;
let matches = 0;

let hasFlippedCard = false;
let pairWait = false;
let firstCard, secondCard;

function flipCard() {
  if (!this.classList.contains("flip") && !pairWait) {
    this.classList.add("flip");

    if (!hasFlippedCard) {
      // first click
      hasFlippedCard = true;
      firstCard = this;
      return;
    }
    // second click
    if (this != firstCard) {
      pairWait = true;
      hasFlippedCard = false;
      secondCard = this;
      checkMatch();
    }
  }
}

function checkMatch() {
  //match check
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  isMatch ? disableCardFlip() : unflipSelectedCards();
}

function disableCardFlip() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  setTimeout(() => {
    matches++;
    resetCards();
    if (matches === maxMatches) {
      restartBox.classList.remove("hide");
    }
  }, 200);
}

function unflipSelectedCards() {
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetCards();
  }, 800);
}

function resetCards() {
  [hasFlippedCard, pairWait] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function unflipAll() {
  cards.forEach((card) => card.classList.remove("flip"));
  cards.forEach((card) => card.addEventListener("click", flipCard));
  matches = 0;
}

(function startGame() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
    restartBox.classList.add("hide");
    resetCards();
  });
})();

function startGame() {
  cards.forEach((card) => {
    unflipAll();
    pairWait = true;
    setTimeout(() => {
      let randomPos = Math.floor(Math.random() * 12);
      card.style.order = randomPos;
      restartBox.classList.add("hide");
      resetCards();
    }, 400);
  });
}

cards.forEach((card) => card.addEventListener("click", flipCard));
startGame();
