import { useState } from 'react';
import GameBorad from './components/GameBoard.jsx';
import GameOver from './components/GameOver.jsx';
import Log from './components/Log.jsx';
import Player from './components/Player.jsx';
import { WINNING_COMBINATIONS } from './winning-combinations.js';

const PLAYERS = {
    X: 'Player 1',
    0: 'Player 2'
};

const INITIAL_GAME_BORAD = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

function deriveActivePlayer(gameTurns) {
    let currentPlayer = 'X';
    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        currentPlayer = '0';
    }
    return currentPlayer;
}

function deriveGameBoard(gameTurns) {
    const gameBoard = [...INITIAL_GAME_BORAD.map(array => [...array])];
    for (const turn of gameTurns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }
    return gameBoard;
}

function deriveWinner(gameBoard, players) {
    let winner;
    for (const wc of WINNING_COMBINATIONS) {
        const firstSquareSymbol = gameBoard[wc[0].row][wc[0].column];
        const secondSquareSymbol = gameBoard[wc[1].row][wc[1].column];
        const thirdSquareSymbol = gameBoard[wc[2].row][wc[2].column];

        if (firstSquareSymbol
            && firstSquareSymbol === secondSquareSymbol
            && firstSquareSymbol === thirdSquareSymbol) {
            winner = players[firstSquareSymbol];
        }
    }
    return winner;
}

function App() {
    const [players, setPlayers] = useState(PLAYERS);
    const [gameTurns, setGameTurns] = useState([]);
    const activePlayer = deriveActivePlayer(gameTurns);
    const gameBoard = deriveGameBoard(gameTurns);
    const winner = deriveWinner(gameBoard, players);
    const hasDraw = gameTurns.length === 9 && !winner;

    function handleSelectSquare(rowIndex, colIndex) {
        setGameTurns(prevTurns => {
            const currentPlayer = deriveActivePlayer(prevTurns);

            const updatedTurns = [
                { square: { row: rowIndex, col: colIndex }, player: currentPlayer }
                , ...prevTurns
            ];
            return updatedTurns;
        });
    }

    function handleRestart() {
        setGameTurns([]);
    }

    function handlePlayerNameChange(symbol, playerName) {
        setPlayers(players => {
            return {
                ...players,
                [symbol]: playerName
            };
        });
    }

    return (<main>
        <div id="game-container">
            <ol id="players" className="highlight-player">
                <Player initialName={PLAYERS.X} symbol="X" isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange} />
                <Player initialName={PLAYERS[0]} symbol="0" isActive={activePlayer === '0'} onChangeName={handlePlayerNameChange} />
            </ol>
            {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
            <GameBorad onSelectSquare={handleSelectSquare} board={gameBoard} />
        </div>
        <Log turns={gameTurns} />
    </main>);
}

export default App
