const startGame = (() => {
    const startBoard = Array.from(Array(9).keys());
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2]
    ]
    const cells = document.getElementsByClassName('cell')
    for(let i = 0; i < cells.length; i++){
        cells[i].textContent = ''
        cells[i].style.backgroundColor = 'white'
        cells[i].addEventListener('click', function playerTurn (e){
            if(!e.target.textContent){
                e.target.textContent = playerO.symbol
                e.target.style.color = `rgba(${134}, ${0}, ${0}, ${0.75})`
                startBoard[e.target.id] = playerO.symbol
                console.log('clicked')
            }
            
        })
    }
})

const newGame = document.getElementById('new-game')
newGame.addEventListener('click', startGame, false)

const Player = (name, symbol) => {
    const getName = () => name;
    return {getName, symbol}
}


const playerX = Player(document.getElementById('player1').value, 'X')
const playerO = Player(document.getElementById('player2').value, 'O')
