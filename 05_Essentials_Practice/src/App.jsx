import { useState } from "react";
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import UserOutput from "./components/UserOutput"

const INIT_INPUT_DATA = {
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
};

function App() {
    const [inputData, setInputData] = useState(INIT_INPUT_DATA);
    const isUserInputValid = inputData.duration >= 1;

    function handleInputDataChange(key, value) {
        setInputData((prevData) => {
            return {
                ...prevData,
                [key]: parseInt(value)
            }
        });
    }

    return (
        <main>
            <Header />
            <UserInput inputData={inputData} handleChange={handleInputDataChange} />
            {!isUserInputValid && (<p className="info-message center">Please enter DURATION greater than 1.</p>)}
            {isUserInputValid && (<UserOutput inputData={inputData} />)}
        </main>
    );
}

export default App
