export default function UserInput({ inputData, handleChange }) {
    return (
        <section id="user-input">
            <div className="input-group">
                <div>
                    <label>Initial Investment</label>
                    <input type="number" value={inputData.initialInvestment}
                        onChange={(e) => handleChange('initialInvestment', e.target.value)}></input>
                </div>
                <div>
                    <label>Annual Investment</label>
                    <input type="number" value={inputData.annualInvestment}
                        onChange={(e) => handleChange('annualInvestment', e.target.value)}></input>
                </div>
            </div>
            <br />
            <div className="input-group">
                <div>
                    <label>Expected Return</label>
                    <input type="number" value={inputData.expectedReturn}
                        onChange={(e) => handleChange('expectedReturn', e.target.value)}></input>
                </div>
                <div>
                    <label>Duration</label>
                    <input type="number" value={inputData.duration}
                        onChange={(e) => handleChange('duration', e.target.value)}></input>
                </div>
            </div>
        </section>
    );
}