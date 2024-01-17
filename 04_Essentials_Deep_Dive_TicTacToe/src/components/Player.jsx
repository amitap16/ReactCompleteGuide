import { useState } from "react";

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        // Passing value this way it take the latest value.
        setIsEditing((editing) => !editing);
        // while here it will not take the latest value if you call the same line again
        //setIsEditing(!isEditing);
    }

    let playerName = <span className="player-name">{name}</span>;

    if (isEditing) {
        playerName = <input className="player" type="text" value={name} required />;
    }

    return (<li>
        <span className="player">
            {playerName}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>);
}