////////////////////// GSAP

gsap.from('.nav', {duration: 2, delay: 1, x: '-200%', ease: 'slowmo'});
gsap.from('.container-for-circles', {duration: 2, delay: 4, y: '-300%', ease: 'bounce'});
gsap.from('#rules-div', {duration: 4, y: '500%', ease: 'sine'});


const rules = document.getElementById('rules');
const rulesBox = document.getElementById('rules-box');
const rulesDiv = document.getElementById('rules-div');
const close = document.getElementById('close');
const containerForCircles = document.querySelector('.container-for-circles');
const smallFlexContainer = document.getElementById('small-flex-container');

const scissors = document.getElementById('scissors-div');
const rock = document.getElementById('rock-div');
const paper = document.getElementById('paper-div');
const scoreDisplay = document.getElementById('score-display');


//////////////////// GSAP

scissors.addEventListener('mouseover', function() {
    gsap.to("#scissors", {
        duration: 1, 
        scale: 1.2, 
        ease: "back.in"
      });
});

rock.addEventListener('mouseover', function() {
    gsap.to('#rock', {
        duration: 1,
        scale: 1.2,
        ease: 'back-in'
    })
});

scissors.addEventListener('mouseleave', function() {
    gsap.to("#scissors", {
        duration: 2, 
        scale: 1, 
        ease: "back.in"
      });
});

rock.addEventListener('mouseleave', function() {
    gsap.to('#rock', {
        duration: 2,
        scale: 1,
        ease: 'back-in'
    })
});

paper.addEventListener('mouseover', function() {
    gsap.to('#paper', {
        duration: 1,
        scale: 1.2,
        ease: 'back-in'
    })
});

paper.addEventListener('mouseleave', function() {
    gsap.to("#paper", {
        duration: 2, 
        scale: 1, 
        ease: "back.in"
      });
});


let score = 0;

rules.addEventListener('click', () => {
    if (rulesBox.style.display === "none") {
        rulesBox.style.display = "block";
      } else {
        rulesBox.style.display = "none";
      }
    });

close.addEventListener('click', () => {
    if (rulesBox.style.display === 'block') {
        rulesBox.style.display = 'none';
    } else {
        rulesBox.style.display = 'block';
    }
})

const buttons = document.querySelectorAll('.button');
let userChoice;
let result;

let start = (e) => {
    containerForCircles.style.display = "block";
    userChoice = e.target.id;
    console.log('user ' + userChoice);
    generateComputerChoice();
    fight();
    newButton.style.display = "block";
    resultDisplay.style.display = "block";
}

buttons.forEach(button => button.addEventListener('click', start));


function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log(randomNumber);
    if (randomNumber === 1) {
        computerChoice = 'rock';
    }
    if (randomNumber === 2) {
        computerChoice = 'paper';
    }
    if (randomNumber === 3) {
        computerChoice ='scissors';
    }
    console.log(computerChoice);
}

let resultDisplay = document.createElement('p');
    resultDisplay.classList.add('-mt-24', 'mb-4', 'inline', 'flex', 'text-center', 'text-medium', 'font-bold', 'justifty-center', 'items-center');

let newButton = document.createElement('button');
    newButton.innerHTML = 'PLAY AGAIN';
    newButton.style.backgroundColor = "white";
    newButton.style.color = "#1D3251";
    newButton.classList.add('mx-auto', 'flex', 'justify-center', 'items-center', 'text-center', 'text-medium', 'font-bold', 'text-center', 'px-6', 'py-2', 'rounded-md');

    let reset = function() {
        containerForCircles.style.display = "block";
        containerForCircles.classList.add('justify-center', 'items-center');
        rock.classList.remove('mt-16');
        scissors.classList.remove('mt-16');
        newButton.style.display = "none";
        resultDisplay.style.display = "none";
        rulesDiv.style.display = 'block';
        scissors.style.display = "block";
        rock.style.display = "block";
        paper.style.display = "block";
        paper.classList.remove('order-2');
        rock.classList.remove('order-2');
        scissors.classList.remove('order-2');
        paper.classList.remove('-order-1');
        buttons.forEach(button => button.addEventListener('click', start));
    }
    newButton.addEventListener('click', reset);

function fight() {
    if (computerChoice === userChoice) {
        result = 'DRAW'
        containerForCircles.classList.add('bg-triangle');
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = "U WIN"
        scissors.style.display = "none";
        containerForCircles.style.display = 'flex';
        containerForCircles.classList.add('justify-center', 'items-center', 'gap-28');
        rock.classList.add('mt-16');
        score+= 1;
        paper.classList.add('-order-1')
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = "U LOSE"
        paper.style.display = "none";
        containerForCircles.style.display = 'flex';
        containerForCircles.classList.add('justify-center', 'items-center', 'gap-28');
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = "U LOSE"
        scissors.style.display = "none";
        containerForCircles.style.display = 'flex';
        containerForCircles.classList.add('justify-center', 'items-center', 'gap-28');
        rock.classList.add('mt-16', 'order-2');
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = "U WIN"
        rock.style.display = "none";
        paper.classList.add('order-2');
        containerForCircles.style.display = 'flex';
        containerForCircles.classList.add('justify-center', 'items-center', 'gap-28');
        scissors.classList.add('mt-16');
        score+= 1;
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'U WIN'
        paper.style.display = "none";
        containerForCircles.style.display = 'flex';
        containerForCircles.classList.add('justify-center', 'items-center', 'gap-28');
        score+= 1;
        rock.classList.add('order-2');
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'U LOSE'
        rock.style.display = "none";
        containerForCircles.style.display = 'flex';
        containerForCircles.classList.add('justify-center', 'items-center', 'gap-28');
        scissors.classList.add('mt-16');
        paper.classList.add('-order-1');
    }
    console.log(result);
    resultDisplay.textContent = result;
    document.body.appendChild(resultDisplay);
    document.body.appendChild(newButton);
    rulesDiv.style.display = "none";
    buttons.forEach(button => button.removeEventListener('click', start));
    scoreDisplay.textContent = score;
}

function hideContainer() {
    if (containerForCircles.style.display === "block") {
        containerForCircles.style.display = "none";
      } else {
        containerForCircles.style.display = "block";
      }
};