import { useState } from 'react';
import GameBorad from './components/GameBoard';
import Log from './components/Log';
import Player from './components/Player';
import './index.css';

function App() {
    const [activePlayer, setActivePlayer] = useState('X');
    const [gameTurns, setGameTurns] = useState([]);

    function handleSelectSquare(rowIndex, colIndex) {
        setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? '0' : 'X');

        setGameTurns(prevTurns => {
            let currentPlayer = 'X';
            if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
                currentPlayer = '0';
            }

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
                <Player initialName="Player 2" symbol="0" isActive={activePlayer === '0'} />
            </ol>
            <GameBorad onSelectSquare={handleSelectSquare} turns={gameTurns} />
        </div>
        <Log turns={gameTurns} />
    </main>);
}

export default App
