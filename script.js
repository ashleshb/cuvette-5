const components = [
  {
    title: "rock",
    border_img: "blue.jpg",
    choice_img: "rock.png",
    beats:"scissor",
  },
  {
    title: "scissor",
    border_img: "purple.jpg",
    choice_img: "scissor.png",
    beats:"paper",
  },
  {
    title: "paper",
    border_img: "yellow.jpg",
    choice_img: "paper.png",
    beats:"rock",
  },
];

const GameZone = document.querySelector(".gamingArea");
const comp_score = document.querySelector(".cscore");
const user_score = document.querySelector(".uscore");
const rockBtn = document.querySelector(".rockBtn");
const rulesBox = document.querySelector(".gameRules");
const rules = document.querySelector(".rules");
const nextBtn = document.querySelector(".nextBtn");
const playZone = document.querySelector(".playingArea");
const closeButton = document.querySelector(".close-button");
const scissorBtn = document.querySelector(".scissorBtn");
const paperBtn = document.querySelector(".paperBtn");
const userchoices = [rockBtn, scissorBtn, paperBtn];
const result = document.querySelector(".result");


let playerScore = parseInt(localStorage.getItem("playerScore")) || 0;
let computerScore = parseInt(localStorage.getItem("computerScore")) || 0;

user_score.textContent = playerScore;
comp_score.textContent = computerScore;

userchoices.forEach((option) => {
  option.addEventListener("click", (e) => {
    const playerChoice = e.currentTarget.dataset.choose;

    const pchand = components;
    let rand =
      pchand[Math.floor(Math.random() * pchand.length)];
    let randChoice = rand.title;

    winner(playerChoice, randChoice);
  });
});

const winner = (player, computer) => {
  if (player == "rock") {
    if (computer == "paper") {
      GameZone.innerHTML = `<div class="result-frame">
      <div class="disc1">
        <div class="disc color">
          <img src="${components[0].border_img}" class="circle" alt="border" />
        </div>
        <div class="disc white">
          <img src="${components[0].choice_img}" alt="rock">
        </div>
      </div>
      <div class="box1">
        <h2>you lost</h2>
        <h3>AGAINST COMPUTER</h3>
        <button class="playAgain" onclick="window.location.reload()">PLAY AGAIN</button>
      </div>
      <div class="disc2">
        <div class="ring-effect">
          <div class="ring ring1"></div>
          <div class="ring ring2"></div>
          <div class="ring ring3"></div>
          <div class="ring ring4"></div>
        </div>
        <div class="disc color">
          <img src="${components[2].border_img}" class="circle" alt="border" />
        </div>
        <div class="disc white">
          <img src="${components[2].choice_img}" alt="paper">
        </div>
      </div>
      <p class="playerPick">YOU PICKED</p>
      <p class="computerPick">COMPUTER PICKED</p>
    </div>`;
      computerScore++;
    } else if (computer == "scissor") {
      GameZone.innerHTML = `<div class="result-frame">
      <div class="disc1">
        <div class="ring-effect">

          <div class="ring ring1"></div>
          <div class="ring ring2"></div>
          <div class="ring ring3"></div>
          <div class="ring ring4"></div>

        </div>
        <div class="disc color">
          <img src="${components[0].border_img}" class="circle" alt="border" />
        </div>
        <div class="disc white">
          <img src="${components[0].choice_img}" alt="rock">
        </div>
      </div>
      <div class="box1">
        <h2>YOU WIN</h2>
        <h3>AGAINST COMPUTER</h3>
        <button class="playAgain" onclick="window.location.reload()">PLAY AGAIN</button>
      </div>
      <div class="disc2">
        <div class="disc color">
          <img src="${components[1].border_img}" class="circle" alt="border" />
        </div>
        <div class="disc white">
          <img src="${components[1].choice_img}" alt="scissor">
        </div>
      </div>
      <p class="playerPick">YOU PICKED</p>
      <p class="computerPick">COMPUTER PICKED</p>
    </div>`;
      showNextBtn();
      playerScore++;
    } else {
      GameZone.innerHTML = `<div class="result-frame">
      <div class="disc1">
        <div class="disc color">
          <img src="${components[0].border_img}" class="circle" alt="border" />
        </div>
        <div class="disc white">
          <img src="${components[0].choice_img}" alt="rock">
        </div>
      </div>
      <div class="box1">
        <h2>TIE UP</h2>
        <button class="playAgain" onclick="window.location.reload()">replay</button>
      </div>
      <div class="disc2">
        <div class="disc color">
          <img src="${components[0].border_img}" class="circle" alt="border" />
        </div>
        <div class="disc white">
          <img src="${components[0].choice_img}" alt="rock">
        </div>
      </div>
      <p class="playerPick">YOU PICKED</p>
      <p class="computerPick">COMPUTER PICKED</p>
    </div>`;
    }
  } else if (player == "scissor") {
    if (computer == "paper") {
      GameZone.innerHTML = `<div class="result-frame">
      <div class="disc1">
        <div class="ring-effect">
          <div class="ring ring1"></div>
          <div class="ring ring2"></div>
          <div class="ring ring3"></div>
          <div class="ring ring4"></div>
        </div>
        <div class="disc color">
          <img src="${components[1].border_img}" class="circle" alt="border" />
        </div>
        <div class="disc white">
          <img src="${components[1].choice_img}" alt="scissor">
        </div>
      </div>
      <div class="box1">
        <h2>YOU WIN</h2>
        <h3>AGAINST COMPUTER</h3>
        <button class="playAgain" onclick="window.location.reload()">PLAY AGAIN</button>
      </div>
      <div class="disc2">
        <div class="disc color">
          <img src="${components[2].border_img}" class="circle" alt="border" />
        </div>
        <div class="disc white">
          <img src="${components[2].choice_img}" alt="paper">
        </div>
      </div>
      <p class="playerPick">YOU PICKED</p>
      <p class="computerPick">COMPUTER PICKED</p>
    </div>`;
      showNextBtn();
      playerScore++;
    } else if (computer == "rock") {
      GameZone.innerHTML = `<div class="result-frame">
      <div class="disc1">
        <div class="disc color">
          <img src="${components[1].border_img}" class="circle" alt="border" />
        </div>
        <div class="disc white">
          <img src="${components[1].choice_img}" alt="scissor">
        </div>
      </div>
      <div class="box1">
        <h2>you lost</h2>
        <h3>AGAINST COMPUTER</h3>
        <button class="playAgain" onclick="window.location.reload()">PLAY AGAIN</button>
      </div>
      <div class="disc2">
        <div class="ring-effect">
          <div class="ring ring1"></div>
          <div class="ring ring2"></div>
          <div class="ring ring3"></div>
          <div class="ring ring4"></div>
        </div>
        <div class="disc color">
          <img src="${components[0].border_img}" class="circle" alt="border" />
        </div>
        <div class="disc white">
          <img src="${components[0].choice_img}" alt="rock">
        </div>
      </div>
      <p class="playerPick">YOU PICKED</p>
      <p class="computerPick">COMPUTER PICKED</p>
    </div>`;
      computerScore++;
    } else {
      GameZone.innerHTML = `<div class="result-frame">
      <div class="disc1">
        <div class="disc color">
          <img src="${components[1].border_img}" class="circle" alt="border" />
        </div>
        <div class="disc white">
          <img src="${components[1].choice_img}" alt="scissor">
        </div>
      </div>
      <div class="box1">
        <h2>TIE UP</h2>
        <button class="playAgain" onclick="window.location.reload()">replay</button>
      </div>
      <div class="disc2">
        <div class="disc color">
          <img src="${components[1].border_img}" class="circle" alt="border" />
        </div>
        <div class="disc white">
          <img src="${components[1].choice_img}" alt="scissor">
        </div>
      </div>
      <p class="playerPick">YOU PICKED</p>
      <p class="computerPick">COMPUTER PICKED</p>
    </div>`;
    }
  } else if (player == "paper") {
    if (computer == "rock") {
      GameZone.innerHTML = `<div class="result-frame">
      <div class="disc1">
        <div class="ring-effect">
          <div class="ring ring1"></div>
          <div class="ring ring2"></div>
          <div class="ring ring3"></div>
          <div class="ring ring4"></div>
        </div>
        <div class="disc color">
          <img src="${components[2].border_img}" class="circle" alt="border" />
        </div>
        <div class="disc white">
          <img src="${components[2].choice_img}" alt="paper">
        </div>
      </div>
      <div class="box1">
        <h2>YOU WIN</h2>
        <h3>AGAINST COMPUTER</h3>
        <button class="playAgain" onclick="window.location.reload()">PLAY AGAIN</button>
      </div>
      <div class="disc2">
        <div class="disc color">
          <img src="${components[0].border_img}" class="circle" alt="border" />
        </div>
        <div class="disc white">
          <img src="${components[0].choice_img}" alt="rock">
        </div>
      </div>
      <p class="playerPick">YOU PICKED</p>
      <p class="computerPick">COMPUTER PICKED</p>
    </div>`;
      showNextBtn();
      playerScore++;
    } else if (computer == "scissor") {
      GameZone.innerHTML = `<div class="result-frame">
      <div class="disc1">
        <div class="disc color">
          <img src="${components[2].border_img}" class="circle" alt="border" />
        </div>
        <div class="disc white">
          <img src="${components[2].choice_img}" alt="paper">
        </div>
      </div>
      <div class="box1">
        <h2>you lost</h2>
        <h3>AGAINST COMPUTER</h3>
        <button class="playAgain" onclick="window.location.reload()">PLAY AGAIN</button>
      </div>
      <div class="disc2">
        <div class="ring-effect">
          <div class="ring ring1"></div>
          <div class="ring ring2"></div>
          <div class="ring ring3"></div>
          <div class="ring ring4"></div>
        </div>
        <div class="disc color">
          <img src="${components[1].border_img}" class="circle" alt="border" />
        </div>
        <div class="disc white">
          <img src="${components[1].choice_img}" alt="scissor">
        </div>
      </div>
      <p class="playerPick">YOU PICKED</p>
      <p class="computerPick">COMPUTER PICKED</p>
    </div>`;
      computerScore++;
    } else {
      GameZone.innerHTML = `<div class="result-frame">
      <div class="disc1">
        <div class="disc color">
          <img src="${components[2].border_img}" class="circle" alt="border" />
        </div>
        <div class="disc white">
          <img src="${components[2].choice_img}" alt="paper">
        </div>
      </div>
      <div class="box1">
        <h2>TIE UP</h2>
        <button class="playAgain" onclick="window.location.reload()">replay</button>
      </div>
      <div class="disc2">
        <div class="disc color">
          <img src="${components[2].border_img}" class="circle" alt="border" />
        </div>
        <div class="disc white">
          <img src="${components[2].choice_img}" alt="paper">
        </div>
      </div>
      <p class="playerPick">YOU PICKED</p>
      <p class="computerPick">COMPUTER PICKED</p>
    </div>`;
    }
  }
  user_score.textContent = playerScore;
  comp_score.textContent = computerScore;
  localStorage.setItem("playerScore", playerScore);
  localStorage.setItem("computerScore", computerScore);
};

rules.addEventListener("click", () => {
  rulesBox.classList.toggle("gameRulesBox");
});

closeButton.addEventListener("click", () => {
  rulesBox.classList.add("gameRulesBox");
});

const showNextBtn = () => {
  nextBtn.classList.remove("nextBtnRemove");
  nextBtn.addEventListener("click", () => {
    playZone.innerHTML = `<div class="winnerpage">
    <div class="hurray-imgs">
      <img class="star1" src="star.png" alt="stars">
      <img class="star" src="star.png" alt="stars">
      <img class="star2" src="star.png" alt="stars">
      <img class="trophy" src="trophy.png" alt="trophy image">
    </div>
    <h1 id="hurraytxt">HURRAY!!!</h1>
    <h3>YOU WON THE GAME</h3>
    <button class="playAgain hurrayButton" onclick="window.location.reload()">PLAY AGAIN</button>
  </div>`;
    nextBtn.classList.add("nextBtnRemove");
  });
};