import { useState } from "react";
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import UserOutput from "./components/UserOutput"
import { calculateInvestmentResults2 } from "./util/investment";

const INIT_INPUT_DATA = {
    'II': 15000, //Initial Investment
    'AI': 1200, //Annual Investment
    'ER': 6, //Expected Return
    'DU': 10 //Duration
};

function App() {
    const [inputData, setInputData] = useState(INIT_INPUT_DATA);
    let result = calculateResult();

    function handleInputDataChange(event, key) {
        setInputData((prevData) => {
            return {
                ...prevData,
                [key]: parseInt(event?.target?.value)
            }
        });

        result = calculateResult();
    }

    function calculateResult() {
        const initialInvestment = inputData['II'];
        const annualInvestment = inputData['AI'];
        const expectedReturn = inputData['ER'];
        const duration = inputData['DU'];
        console.log(initialInvestment, annualInvestment, expectedReturn, duration);

        const result = calculateInvestmentResults2({
            initialInvestment, annualInvestment, expectedReturn, duration
        });
        console.log(result);

        return result;
    }

    return (
        <main>
            <Header />
            <UserInput handleChange={handleInputDataChange} />
            <UserOutput result={result} />
        </main>
    );
}

export default App
