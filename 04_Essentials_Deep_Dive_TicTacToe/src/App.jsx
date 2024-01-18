import GameBorad from './components/GameBoard';
import Player from './components/Player';
import './index.css';

function App() {
    return (<main>
        <div id="game-container">
            <ol id="players">
                <Player initialName="Player 1" symbol="X" />
                <Player initialName="Player 2" symbol="O" />
            </ol>
            <GameBorad />
        </div>
        LOG
    </main>);
}

export default App
