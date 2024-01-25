import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    function handleEditClick() {
        // Passing value this way it take the latest value.
        setIsEditing((editing) => !editing);
        // while here it will not take the latest value if you call the same line again
        //setIsEditing(!isEditing);

        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    let editablePlyaerName = <span className="player-name">{playerName}</span>;

    if (isEditing) {
        editablePlyaerName = <input type="text" value={playerName} required onChange={handleChange} />;
    }

    return (<li className={isActive ? 'active' : undefined}>
        <span className="player">
            {editablePlyaerName}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>);
}