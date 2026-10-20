// Escolher um número aleatório de 1 à 3, e condicionalmente escolher pedra, papel ou tesoura dependendo do resultado
function getComputerChoice() {

    let optionId = Math.floor(Math.random() * 3) + 1
    let computerChoice = null;

    if (optionId === 1) {
        computerChoice = "pedra"
    } else if (optionId === 2) {
        computerChoice = "papel"
    } else if (optionId === 3) {
        computerChoice = "tesoura"
    }

    return computerChoice

}

// Exibir ao usuário um prompt para que escolha pedra, papel ou tesoura

let humanScore = 0
let computerScore = 0

function getHumanChoice() {

    let humanChoice = prompt("PÁ \u{1F4A5} RÁPIDO!!!! PEDRA, PAPEL OU TESOURA?")
    return humanChoice

}

// Joga um round checando como as escolhas se correspondem
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.trim().toLowerCase(); 

    console.log(`Checando vencedor...`)
    
    if ( computerChoice === "pedra" && humanChoice == "tesoura") {
        console.log(`PUTZ PERDEU... PEDRA GANHA DE TESOURA...`);
        computerScore += 1
    } else if ( computerChoice === "papel" && humanChoice == "pedra") {
        console.log(`PUTZ PERDEU... PAPEL GANHA DE PEDRA...`);
        computerScore += 1
    } else if ( computerChoice === "tesoura" && humanChoice == "papel") {
        console.log(`PUTZ PERDEU... TESOURA GANHA DE PAPEL...`)
        computerScore += 1
    } else if ( computerChoice === "pedra" && humanChoice == "papel") {
        console.log(`AEEE GANHOU!!!!`);
        humanScore += 1
    } else if ( computerChoice === "papel" && humanChoice == "tesoura") {
        console.log(`AEEE GANHOU!!!!`);
        humanScore += 1
    } else if ( computerChoice === "tesoura" && humanChoice == "pedra") {
        console.log(`AEEE GANHOU!!!!`);
        humanScore += 1
    } else {
        console.log("Empatou, ixe.")
    }

    console.log(`Tabela:\nVocê: ${humanScore} pontos\nComputador: ${computerScore} pontos`)


}

getHumanChoice()
console.log(getComputerChoice())