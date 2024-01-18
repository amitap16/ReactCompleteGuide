import { useState } from "react";

const initialGameBorad = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBorad() {
    const [gameBoard, setGameBoard] = useState(initialGameBorad);

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedGameBoard[rowIndex][colIndex] = 'X';
            return updatedGameBoard;
        });
    }

    return (<ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
            <li key={rowIndex}>
                <ol>
                    {row.map((col, colIndex) => (
                        <li key={colIndex}>
                            <button
                                onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                                {col}
                            </button>
                        </li>))}
                </ol>
            </li>))}
    </ol>
    );
}