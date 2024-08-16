const diceImage = document.getElementById('dice-image');
const rollDiceButton = document.getElementById('roll-dice');
const diceResult = document.getElementById('dice-result');
const coinsDisplay = document.getElementById('coins');

let playerCoins = 0;

function awardCoins(amount) {
    playerCoins += amount;
    coinsDisplay.textContent = `Coins: ${playerCoins}`;
}

function playRockPaperScissors() {
    const choices = ["rock", "paper", "scissors"];
    const playerChoice = prompt("Choose rock, paper, or scissors:");

    if (choices.includes(playerChoice.toLowerCase())) {
        const npcChoice = choices[Math.floor(Math.random() * 3)];
        let result = "";
        if (playerChoice.toLowerCase() === npcChoice) {
            result = "It's a tie!";
        } else if (
            (playerChoice.toLowerCase() === "rock" && npcChoice === "scissors") ||
            (playerChoice.toLowerCase() === "paper" && npcChoice === "rock") ||
            (playerChoice.toLowerCase() === "scissors" && npcChoice === "paper")
        ) {
            result = "You win!";
        } else {
            result = "NPC wins!";
        }

        alert(`You chose: ${playerChoice}\nNPC chose: ${npcChoice}\n${result}`);

        if (result === "You win!") {
            awardCoins(1000);
        } 
    } else {
        alert("Invalid choice. Please choose rock, paper, or scissors.");
    }
}

rollDiceButton.addEventListener('click', () => {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    diceImage.src = `dice${diceRoll}.png`;
    diceResult.textContent = `Result: ${diceRoll}`;

    switch (diceRoll) {
        case 5:
            awardCoins(160);
            break;
        case 4:
            awardCoins(150);
            break;
        case 3:
            awardCoins(400);
            break;
        case 2:
            awardCoins(500);
            break;
        case 1:
            awardCoins(700);
            break;
        case 6:
            playRockPaperScissors();
            break;
        default:
            break;
    }
});
