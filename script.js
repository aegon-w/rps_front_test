let playerScore = 5;
let opponentScore = 19;

function updateScores() {
  document.getElementById("score1").innerText = `${playerScore}/20`;
  document.getElementById("score2").innerText = `${opponentScore}/20`;
}

function selectHand(hand) {
  document.getElementById("player1-hand").querySelector("p").innerText = hand;
  document.getElementById("player1-hand").querySelector("img").src = `${hand}.png`;
}

document.getElementById("ready-button").addEventListener("click", () => {
  const hands = ["rock", "paper", "scissors"];
  const opponentHand = hands[Math.floor(Math.random() * hands.length)];

  document.getElementById("player2-hand").querySelector("p").innerText = opponentHand;
  document.getElementById("player2-hand").querySelector("img").src = `${opponentHand}.png`;

  const playerHand = document.getElementById("player1-hand").querySelector("p").innerText;

  let resultMessage = "";
  if (playerHand === opponentHand) {
    resultMessage = "It's a tie!";
  } else if (
    (playerHand === "rock" && opponentHand === "scissors") ||
    (playerHand === "paper" && opponentHand === "rock") ||
    (playerHand === "scissors" && opponentHand === "paper")
  ) {
    playerScore++;
    resultMessage = "+1 POINT";
  } else {
    opponentScore++;
    resultMessage = "-1 POINT";
  }

  document.getElementById("message").innerText = resultMessage;
  updateScores();
});
