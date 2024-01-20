import { useState } from 'react';
import GameBorad from './components/GameBoard';
import Player from './components/Player';
import './index.css';

function App() {
    const [activePlayer, setActivePlayer] = useState('X');

    function handleSelectSquare() {
        setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? '0' : 'X');
    }

    return (<main>
        <div id="game-container">
            <ol id="players" className="highlight-player">
                <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
                <Player initialName="Player 2" symbol="0" isActive={activePlayer === '0'} />
            </ol>
            <GameBorad onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
        </div>
        LOG
    </main>);
}

export default App
