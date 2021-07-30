const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  console.log("CARD CLICKED");
  console.log("lockboard is: " + lockBoard);
  if (lockBoard) return;
  
  console.log("card dataset: " + this.dataset.number)
  if (this === firstCard) return;
  
  this.classList.add("flip");

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;
    firstCardNumber = this.dataset.number;

    console.log("first card is now: " + firstCard)

    return;
  }

  // second click
  secondCard = this;
  secondCardNumber = this.dataset.number;
  console.log("second card is now: " + secondCard)

  checkForMatch(firstCardNumber, secondCardNumber);
}

function checkForMatch(cardOne, cardTwo) {
  let isMatch = cardOne === cardTwo;
  console.log("do cards match is: " + isMatch)
 
  isMatch ? disableCards() : unflipCards();
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

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach((card) => card.addEventListener("click", flipCard));

document.querySelectorAll(".some-class").forEach((item) => {
  item.ddEventListener("click", (event) => {}); //handle click
}); 

$("#card").click(function(){
  $("#card").toggleClass("flip_card")
});

