

const Player = (name, symbol) => {
    const getName = () => document.getElementById(`${name}`).value;
    return {getName, symbol}
}

let startBoard = [0,1,2,3,4,5,6,7,8]
let player = 0

const startGame = () => {
    const header = document.getElementById('header')
    header.textContent = 'Tic tac toe'

    startBoard = [0,1,2,3,4,5,6,7,8]

    if(document.getElementById('player1').value === ''){
        document.getElementById('player1').value = 'Player 1'

    } if (document.getElementById('player2').value === ''){
        document.getElementById('player2').value = 'Player 2'
    }

    let playerX = Player('player1', 'X')
    let playerO = Player('player2', 'O')    

    document.getElementById('player1').style.transform = 'scale(1.1)'
    document.getElementById('player1').style.fontWeight = 'bold'
    document.getElementById('player2').style.transform = 'scale(1)'
    document.getElementById('player2').style.fontWeight = 'normal'

    const cells = document.getElementsByClassName('cell')
    player = playerX
    console.log(`next player is ${player.symbol}`)
    console.log(`player x's name is ${playerX.getName()}`)
    console.log(`player o's name is ${playerO.getName()}`)
    for(let i = 0; i < cells.length; i++){
        cells[i].textContent = ''
        cells[i].style.backgroundColor = 'transparent'
        cells[i].addEventListener('click', function playerTurn (e){
            if(header.textContent.includes('wins') || header.textContent.includes('draw') || e.target.textContent){
                return cells[i].removeEventListener('click', playerTurn)
            } else if(!e.target.textContent && player === playerX){
                e.target.textContent = playerX.symbol
                e.target.style.color = `rgba(${0}, ${0}, ${134}, ${0.75})`
                startBoard[e.target.id] = playerX.symbol
                document.getElementById('player2').style.transform = 'scale(1.1)'
                document.getElementById('player2').style.fontWeight = 'bold'
                document.getElementById('player1').style.transform = 'scale(1)'
                document.getElementById('player1').style.fontWeight = 'normal'

                player = playerO
                gamePlay.endGame(playerX)
            console.log(`next player is ${player.symbol}`)
                
                console.log(startBoard)
            } else if (!e.target.textContent && player === playerO){
                e.target.textContent = playerO.symbol
                e.target.style.color = `rgba(${134}, ${0}, ${0}, ${0.75})`
                startBoard[e.target.id] = playerO.symbol
                document.getElementById('player1').style.transform = 'scale(1.1)'
                document.getElementById('player1').style.fontWeight = 'bold'
                document.getElementById('player2').style.transform = 'scale(1)'
                document.getElementById('player2').style.fontWeight = 'normal'

                player = playerX
                gamePlay.endGame(playerO)
                console.log(startBoard)
            console.log(`next player is ${player.symbol}`)

            }
            
        })
    }
    console.log(startBoard)
    return {cells, playerX, playerO }
}

const gamePlay = (() => {
    const newGame = document.getElementById('new-game')
    newGame.addEventListener('click', startGame) 
    
    const endGame = (player) => {

        const checkDraw = () => {
            let draw = false
            for(let i = 0; i < startBoard.length; i++){
                if(typeof startBoard[i] == 'number'){
                    draw = true
                } 
            }

            return draw
        }

        const cells = document.getElementsByClassName('cell')

        const drawBackground = (a, b, c) => {
            cells[a].style.backgroundColor = `rgb(${200}, ${200}, ${200})`
            cells[b].style.backgroundColor = `rgb(${200}, ${200}, ${200})`
            cells[c].style.backgroundColor = `rgb(${200}, ${200}, ${200})`
        }

        const announceWinner = (player) => {
            return document.getElementById('header').textContent = `${player.getName()} wins`
        }

        const resetBoard = () => startBoard = Array.from(Array(9).keys())

        if(startBoard[0] === player.symbol && startBoard[1] === player.symbol && startBoard[2] === player.symbol){
            return announceWinner(player), resetBoard(), drawBackground(0, 1, 2) 

        } else if(startBoard[3] === player.symbol && startBoard[4] === player.symbol && startBoard[5] === player.symbol){
            return announceWinner(player), resetBoard(), drawBackground(3, 4, 5)

        } else if(startBoard[6] === player.symbol && startBoard[7] === player.symbol && startBoard[8] === player.symbol){
            return announceWinner(player), resetBoard(), drawBackground(6, 7, 8)

        } else if(startBoard[0] === player.symbol && startBoard[3] === player.symbol && startBoard[6] === player.symbol){
            return announceWinner(player), resetBoard(), drawBackground(0, 3, 6)

        } else if(startBoard[1] === player.symbol && startBoard[4] === player.symbol && startBoard[7] === player.symbol){
            return announceWinner(player), resetBoard(), drawBackground(1, 4, 7)

        } else if(startBoard[2] === player.symbol && startBoard[5] === player.symbol && startBoard[8] === player.symbol){
            return announceWinner(player), resetBoard(), drawBackground(2, 5, 8)

        } else if(startBoard[0] === player.symbol && startBoard[4] === player.symbol && startBoard[8] === player.symbol){
            return announceWinner(player), resetBoard(), drawBackground(0, 4, 8)


        } else if(startBoard[6] === player.symbol && startBoard[4] === player.symbol && startBoard[2] === player.symbol){
            return announceWinner(player), resetBoard(), drawBackground(6, 4, 2)

        } else if(checkDraw() === false){
            return document.getElementById('header').textContent = `It's a draw`, resetBoard()

        }
    }

    return {endGame}
})()






