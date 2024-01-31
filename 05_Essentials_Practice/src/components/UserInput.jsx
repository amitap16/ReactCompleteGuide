export default function UserInput({ inputData, handleChange }) {
    return (
        <div id="user-input">
            <div className="input-group">
                <div>
                    <label>Initial Investment</label>
                    <input type="number" value={inputData['II']}
                        onChange={(e) => handleChange(e, "II")}></input>
                </div>
                <div>
                    <label>Annual Investment</label>
                    <input type="number" value={inputData['AI']}
                        onChange={(e) => handleChange(e, "AI")}></input>
                </div>
            </div>
            <br />
            <div className="input-group">
                <div>
                    <label>Expected Return</label>
                    <input type="number" value={inputData['ER']}
                        onChange={(e) => handleChange(e, "ER")}></input>
                </div>
                <div>
                    <label>Duration</label>
                    <input type="number" value={inputData['DU']}
                        onChange={(e) => handleChange(e, "DU")}></input>
                </div>
            </div>
        </div>
    );
}