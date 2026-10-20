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
        return "computer"
    } else if ( computerChoice === "papel" && humanChoice == "pedra") {
        console.log(`PUTZ PERDEU... PAPEL GANHA DE PEDRA...`);
        return "computer"
    } else if ( computerChoice === "tesoura" && humanChoice == "papel") {
        console.log(`PUTZ PERDEU... TESOURA GANHA DE PAPEL...`)
        return "computer"
    } else if ( computerChoice === "pedra" && humanChoice == "papel") {
        console.log(`AEEE GANHOU!!!! PAPEL GANHA DE PEDRA!!!`);
        return "human"
    } else if ( computerChoice === "papel" && humanChoice == "tesoura") {
        console.log(`AEEE GANHOU!!!! TESOURA GANHA DE PAPEL!!!`);
        return "human"
    } else if ( computerChoice === "tesoura" && humanChoice == "pedra") {
        console.log(`AEEE GANHOU!!!! PEDRA GANHA DE TESOURA!!!`);
        return "human"
    } else {
        console.log(`Empatou, ixe... ${humanChoice} e ${computerChoice} são iguais...`)
        return "tie"
    }

}

// Inicia um jogo com 5 rounds e cuida da pontuação e declara o vencedor 
function playGame() {   

    let humanScore = 0
    let computerScore = 0

    for (let i = 1; i <= 5; i++) {
        let result = playRound(getHumanChoice(), getComputerChoice())

        if (result === "human") {
            humanScore += 1;
        } else if (result === "computer") {
            computerScore += 1;
        }

        console.log(`Tabela:\nVocê: ${humanScore} pontos\nComputador: ${computerScore} pontos`)
    }

    if (humanScore > computerScore) {
        console.log("AEEEE!! GANHOU O JOGO (perdi)")
    } else if (humanScore < computerScore) {
        console.log("Aff, perdeu o jogo (perdi)")
    } else {
        console.log("Empateou...")
    }
}

playGame()

