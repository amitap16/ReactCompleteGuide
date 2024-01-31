export default function UserInput({ handleChange }) {

    return (
        <div id="user-input">
            <div className="input-group">
                <div>
                    <label>Initial Investment</label>
                    <input type="number" min="1000" max="100000" defaultValue="15000"
                      name="II" id="test" onChange={(e) => handleChange(e, "II")}></input>
                </div>
                <div>
                    <label>Annual Investment</label>
                    <input type="number" min="1000" max="100000" defaultValue="1200"
                        onChange={(e) => handleChange(e, "AI")}></input>
                </div>
            </div>
            <br />
            <div className="input-group">
                <div>
                    <label>Expected Return</label>
                    <input type="number" min="1" max="50" defaultValue="6"
                        onChange={(e) => handleChange(e, "ER")}></input>
                </div>
                <div>
                    <label>Duration</label>
                    <input type="number" min="1" max="50" defaultValue="10"
                        onChange={(e) => handleChange(e, "DU")}></input>
                </div>
            </div>
        </div>
    );
}