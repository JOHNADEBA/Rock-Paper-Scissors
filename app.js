const game = () => {
  let playaScore = 0;
  let compScore = 0;
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const intro = document.querySelector(".intro");
    const score = document.querySelector(".score");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      intro.classList.add("fadeOut");
      score.classList.add("fadeIn");
      match.classList.add("fadeIn");
    });
  };

  const playGame = () => {
    const compHand = document.querySelector(".computer-hand");
    const playerHand = document.querySelector(".player-hand");
    const option = document.querySelectorAll(".option button");

    const compChoices = ["rock", "paper", "scissors"];

    option.forEach((opt) => {
      opt.addEventListener("click", function () {
        const compRand = Math.floor(Math.random() * 3);
        const compValue = compChoices[compRand];

        validateHands(compValue, this.textContent);

        compHand.src = `./images/${compValue}.png`;
        playerHand.src = `./images/${this.textContent}.png`;
      });
    });
  };

  const displayScore = () => {
    const computerScore = document.querySelector(".computer-score p");
    let playerScore = document.querySelector(".player-score p");
    computerScore.textContent = compScore;
    playerScore.textContent = playaScore;
  };
  const validateHands = (compValue, playerVal) => {
    const scoreBoard = document.querySelector(".score-board");
    if (playerVal === compValue) {
      scoreBoard.textContent = "It's a tie";

      return;
    }
    if (playerVal === "rock") {
      if (compValue === "scissors") {
        scoreBoard.textContent = " Congratulations!!! You Win";
        playaScore++;
        displayScore();
        return;
      } else {
        scoreBoard.textContent = "You Loose";
        compScore++;
        displayScore();
        return;
      }
    }

    if (playerVal === "paper") {
      if (compValue === "scissors") {
        scoreBoard.textContent = " You Loose";
        compScore++;
        displayScore();
        return;
      } else {
        scoreBoard.textContent = "Congratulations!!! You Win";
        playaScore++;
        displayScore();
        return;
      }
    }

    if (playerVal === "scissors") {
      if (compValue === "rock") {
        scoreBoard.textContent = " You Loose";
        compScore++;
        displayScore();
        return;
      } else {
        scoreBoard.textContent = "Congratulations!!! You Win";
        playaScore++;
        displayScore();
        return;
      }
    }
  };

  startGame();
  playGame();
};
game();
