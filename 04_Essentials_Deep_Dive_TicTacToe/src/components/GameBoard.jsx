import { useState } from "react";

const initialGameBorad = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBorad({ onSelectSquare, turns }) {
    const gameBoard = initialGameBorad;

    for (const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

    return (<ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
            <li key={rowIndex}>
                <ol>
                    {row.map((col, colIndex) => (
                        <li key={colIndex}>
                            <button
                                onClick={() => onSelectSquare(rowIndex, colIndex)}
                                disabled={col !== null}>
                                {col}
                            </button>
                        </li>))}
                </ol>
            </li>))}
    </ol>
    );
}