let cards = [];
let hasBlackJack = false;
let isAlive = true;
let message = "";
let sum = 0;

let player = {
    name: "Mario",
    chips: 150
};

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.querySelector("#player-el");

playerEl.textContent = player.name + ": " + player.chips;

function startGame() {
    firstCard = getRandomCard();
    secondCard = getRandomCard();
    cards.push(firstCard);
    cards.push(secondCard);
    sum = firstCard + secondCard;

    renderGame();
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13)+1;

    if (randomNumber===1) {
        return 11;
    } else if (randomNumber>10) {
        return 10;
    } else {
        return randomNumber;
    }
}

function renderGame() {
    
    cardsEl.textContent = "Cards: ";
    for (let x=0; x<cards.length; x++) {
        cardsEl.textContent += cards[x] + " ";
    }

    sumEl.textContent= "Sum: " + sum;
    if (sum<=20) {
        message = "Do you want to draw a new card?";
    } else if (sum===21) {
        message = "Wohoo! You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    
    messageEl.textContent = message;
}

function newCard() {
    if(isAlive && !hasBlackJack) {
        
        let card = getRandomCard();
        sum += card;
        cards.push(card);

        renderGame();
    }
}