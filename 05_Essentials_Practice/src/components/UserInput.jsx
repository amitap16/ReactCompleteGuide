export default function UserInput() {


    return (
        <div id="user-input">
            <div className="input-group">
                <div>
                    <label>Initial Investment</label>
                    <input type="number" min="1000" max="100000" defaultValue="10000"></input>
                </div>
                <div>
                    <label>Annual Investment</label>
                    <input type="number" min="1000" max="100000" defaultValue="1000"></input>
                </div>
            </div>
            <br />
            <div className="input-group">
                <div>
                    <label>Expected Return</label>
                    <input type="number" min="1" max="50" defaultValue="10"></input>
                </div>
                <div>
                    <label>Duration</label>
                    <input type="number" min="1" max="50" defaultValue="20"></input>
                </div>
            </div>
        </div>
    );
}