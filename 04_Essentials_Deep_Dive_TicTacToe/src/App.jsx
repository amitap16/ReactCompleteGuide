import { useState } from 'react';
import GameBorad from './components/GameBoard.jsx';
import GameOver from './components/GameOver.jsx';
import Log from './components/Log.jsx';
import Player from './components/Player.jsx';
import { WINNING_COMBINATIONS } from './winning-combinations.js';

const initialGameBorad = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

function deriveActtivePlayer(gameTurns) {
    let currentPlayer = 'X';
    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        currentPlayer = '0';
    }

    return currentPlayer;
}

function App() {
    const [gameTurns, setGameTurns] = useState([]);
    const activePlayer = deriveActtivePlayer(gameTurns);
    const gameBoard = initialGameBorad;
    let winner;

    for (const turn of gameTurns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

    for (const wc of WINNING_COMBINATIONS) {
        const firstSquareSymbol = gameBoard[wc[0].row][wc[0].column];
        const secondSquareSymbol = gameBoard[wc[1].row][wc[1].column];
        const thirdSquareSymbol = gameBoard[wc[2].row][wc[2].column];

        if (firstSquareSymbol
            && firstSquareSymbol === secondSquareSymbol
            && firstSquareSymbol === thirdSquareSymbol) {
            winner = firstSquareSymbol;
        }
    }

    const hasDraw = gameTurns.length === 9 && !winner;

    function handleSelectSquare(rowIndex, colIndex) {
        setGameTurns(prevTurns => {
            const currentPlayer = deriveActtivePlayer(prevTurns);

            const updatedTurns = [
                { square: { row: rowIndex, col: colIndex }, player: currentPlayer }
                , ...prevTurns
            ];
            return updatedTurns;
        });
    }

    return (<main>
        <div id="game-container">
            <ol id="players" className="highlight-player">
                <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
                <Player initialName="Pl ayer 2" symbol="0" isActive={activePlayer === '0'} />
            </ol>
            {(winner || hasDraw) && <GameOver winner={winner} />}
            <GameBorad onSelectSquare={handleSelectSquare} board={gameBoard} />
        </div>
        <Log turns={gameTurns} />
    </main>);
}

export default App
