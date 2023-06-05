let rockElection = document.querySelector('#rock');
let paperElection = document.querySelector('#paper');
let scissorsElection = document.querySelector('#scissors')
let gameChoices = ['r', 'p', 's']


let computerChoice = () => {
    let randomChoice = Math.floor(Math.random() * 3)
    return gameChoices[randomChoice]
}

rockElection.addEventListener('click', () => {
    let rockElection = gameChoices[0]
    return console.log(rockElection)
})