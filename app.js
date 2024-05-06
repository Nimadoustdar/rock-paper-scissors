const choices = ["rock", "paper", "scissors"]
let playerScore = 0
let computerScore = 0
const randomNumber = Math.floor(Math.random() * choices.length)

const winner = (player, computer) => {
    //Win OR LOSE

    if (player === computer) {
        return "draw"
    } else if (player === "rock") {
        return computer === "scissors" ? "player" : "computer"

    } else if (player === "paper") {
        return computer === "rock " ? "player" : "computer"
    } else {
        return computer === "paper " ? "player" : "computer"
    }
}


const showResult = result => {
    if (result === "player") {
        console.log("You Win!")
        playerScore++
    } else if (result === "computer") {
        console.log("You Lose !")
        computerScore++
    } else {
        console.log("It`s tie")
    }
    console.log(`Your Score: ${playerScore}`)
    console.log(`computer's Score: ${computerScore}`)
    console.log("----------------------")

}


const play = () => {
    const playerChoice = prompt('Choose rock , paper or scissors')?.toLowerCase()
    if (choices.indexOf(playerChoice?.toLowerCase()) === -1) {
        console.log("you cheated")
        return
    } else {
        console.log(`you choice ${playerChoice}`)
    }

    const computerChoice = choices[randomNumber]
    console.log(`computer Choice  ${computerChoice}`)

    const gameResult = winner(playerChoice, computerChoice)
    showResult(gameResult)
    play()


}

play()



