const rock = '<i class="fa fa-hand-rock-o" aria-hidden="true"></i>';
const pencil = '<i class="fa fa-hand-o-right" aria-hidden="true"></i>';
const scissors = '<i class="fa fa-hand-scissors-o" aria-hidden="true"></i>';
const paper = '<i class="fa fa-hand-paper-o" aria-hidden="true"></i>';
const game = document.querySelector(".game");
const selections = document.querySelectorAll(".selections");
const playerChoise = document.querySelector(".player");
const enemyChoise = document.querySelector(".enemy");
const enemyScore = document.querySelector("#enemyScore");
const playerScore = document.querySelector("#playerScore");

// on-click player move selections
selections.forEach((selection) => {
  selection.addEventListener("click", () => {
    // player side
    playerChoise.classList.add("animate__animated");
    playerChoise.classList.add("animate__bounceIn");
    playerChoise.innerHTML = selection.innerHTML;
    setTimeout(() => {
      playerChoise.classList.remove("animate__bounceIn");
    }, 1000);
    game.classList.toggle("unclickable");

    //enemy side
    setTimeout(() => {
      enemyChoise.classList.add("animate__animated");
      enemyChoise.classList.add("animate__bounceIn");
    }, 1700);

    setTimeout(() => {
      enemyTurn();
      setTimeout(() => {
        enemyChoise.classList.remove("animate__bounceIn");
      }, 1000);
      if (playerChoise.innerHTML == enemyChoise.innerHTML) {
        messages.innerHTML = "Its a Draw!";
      } else if (
        (playerChoise.innerHTML == rock && enemyChoise.innerHTML == scissors) ||
        (playerChoise.innerHTML == scissors &&
          enemyChoise.innerHTML == paper) ||
        (playerChoise.innerHTML == rock && enemyChoise.innerHTML == pencil) ||
        (playerChoise.innerHTML == scissors &&
          enemyChoise.innerHTML == pencil) ||
        (playerChoise.innerHTML == pencil && enemyChoise.innerHTML == paper) ||
        (playerChoise.innerHTML == paper && enemyChoise.innerHTML == rock)
      ) {
        messages.innerHTML = "You Win This Round!";
        playerScore.innerHTML++;
      } else {
        messages.innerHTML = "You Loose This Round!";
        enemyScore.innerHTML++;
      }
      game.classList.toggle("unclickable");
    }, 2200);
  });
});

// how enemy chooses randomly what move to use
function enemyTurn() {
  // random enemy choise
  let randomEnemy = Math.floor(Math.random() * 4 + 1);
  let e;
  if (randomEnemy === 1) {
    e = rock;
  } else if (randomEnemy === 2) {
    e = pencil;
  } else if (randomEnemy === 3) {
    e = scissors;
  } else if (randomEnemy === 4) {
    e = paper;
  }

  enemyChoise.innerHTML = e;
}
