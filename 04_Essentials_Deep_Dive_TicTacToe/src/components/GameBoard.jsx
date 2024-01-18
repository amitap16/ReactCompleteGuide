const initialGameBorad = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBorad() {
    return (<ol id="game-board">
        {initialGameBorad.map((row, rowIndex) => (
            <li key={rowIndex}>
                <ol>
                    {row.map((col, colIndex) => (
                        <li key={colIndex}>
                            <button>{col}</button>
                        </li>))}
                </ol>
            </li>))}
    </ol>
    );
}