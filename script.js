function getComputerChoice() {

    let optionId = Math.floor(Math.random() * 3) + 1
    let computerChoice = null;

    if (optionId === 1) {
        computerChoice = "Rock"
    } else if (optionId === 2) {
        computerChoice = "Paper"
    } else if (optionId === 3) {
        computerChoice = "Scissors"
    }

    return computerChoice

}

function getHumanChoice() {
""
    let humanChoice = prompt("PÁ \u{1F4A5} RÁPIDO!!!! PEDRA, PAPEL OU TESOURA?")
    return humanChoice

}

getHumanChoice()
console.log(getComputerChoice())