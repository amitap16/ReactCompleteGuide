import { useState } from "react";

export default function Player() {
    const [playerName, setPlayerName] = useState('');
    const [submiited, setSubmiited] = useState(false);

    function handleChange(event) {
        setSubmiited(false);
        setPlayerName(event.target.value);
    }

    function handleClick() {
        setSubmiited(true);
    }

    return (
        <section id="player">
            <h2>Welcome {submiited ? playerName : 'unknown entity'}</h2>
            <p>
                <input type="text" onChange={handleChange} value={playerName} />
                <button onClick={handleClick}>Set Name</button>
            </p>
        </section>
    );
}
