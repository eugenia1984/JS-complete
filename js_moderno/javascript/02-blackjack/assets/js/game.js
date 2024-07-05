(() => {
  "use strict";

  let deck       = [];
  const types    = ["C", "D", "H", "S"],
        specials = ["A", "J", "Q", "K"];

  let pointsPlayers = [];

  // HTML References
  const btnAsk          = document.querySelector("#btnAsk"),
        btnNew          = document.querySelector("#btnNew"),
        btnStop         = document.querySelector("#btnStop"),
        pointsHTML      = document.querySelectorAll("small"),
        divPlayerCards  = document.querySelector("#player-cards"),
        divComputerCards = document.querySelector("#computer-cards");

  // Start a new game      
  const startGame = ( numberPlayers = 2 ) => {
    deck = createDeck();

    for(let i = 0; i < numberPlayers; i++) {
      pointsPlayers.push(0);
    }

    console.log({ pointsPlayers});
  }      

  // Create a new Deck
  const createDeck = () => {

    deck = [];

    for (let i = 2; i <= 10; i++) {
      for (let type of types) {
        deck.push(i + type);
      }
    }

    for (let type of types) {
      for (let special of specials) {
        deck.push(special + type);
      }
    }

    return _.shuffle(deck);
  };

  // Take one card
  const askForOneCard = () => {
    if (deck.length === 0) {
      throw "No cards in deck";
    }

    return deck.pop();
  };

  const cardValue = (card) => {
    const value = card.substring(0, card.length - 1);

    return isNaN(value) ? (value === "A" ? 11 : 10) : Number(value);
  };

  const addPoints = () => {

  }

  const computerTime = (minimumPoints) => {
    do {
      const card = askForOneCard();

      pointsComputer = pointsComputer + cardValue(card);
      pointsHTML[1].innerText = pointsComputer;

      const imgCard = document.createElement("img");
      imgCard.src = `assets/cartas/${card}.png`;
      imgCard.classList.add("game-card");
      divComputerCards.append(imgCard);

      if (minimumPoints > 21) {
        break;
      }
    } while (pointsComputer < minimumPoints && minimumPoints <= 21);

    setTimeout(() => {
      if (pointsComputer === minimumPoints) {
        alert("Nobody wins");
      } else if (minimumPoints > 21) {
        alert("Computer wins");
      } else if (pointsComputer > 21) {
        alert("Player wins");
      } else {
        alert("Computer wins");
      }
    }, 90);
  };

  /***** Events ****/
  btnAsk.addEventListener("click", () => {
    const card = askForOneCard();

    pointsPlayer = pointsPlayer + cardValue(card);
    pointsHTML[0].innerText = pointsPlayer;

    const imgCard = document.createElement("img");
    imgCard.src = `assets/cartas/${card}.png`;
    imgCard.classList.add("game-card");
    divPlayerCards.append(imgCard);

    if (pointsPlayer > 21) {
      btnAsk.disabled = true;
      btnStop.disabled = true;
      computerTime(pointsPlayer);
    } else if (pointsPlayer === 21) {
      btnAsk.disabled = true;
      btnStop.disabled = true;
      computerTime(pointsPlayer);
    }
  });

  btnStop.addEventListener("click", () => {
    btnAsk.disabled = true;
    btnStop.disabled = true;

    computerTime(pointsPlayer);
  });

  btnNew.addEventListener("click", () => {
    console.clear();
    startGame();
    // deck = createDeck();
    pointsPlayer = 0;
    pointsComputer = 0;

    pointsHTML[0].innerText = 0;
    pointsHTML[1].innerText = 0;

    divPlayerCards.innerHTML = "";
    divComputerCards.innerHTML = "";

    btnAsk.disabled = false;
    btnStop.disabled = false;
  });
})();
