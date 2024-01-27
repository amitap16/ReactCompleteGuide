import { calculateInvestmentResults } from "../util/investment";

export default function UserOutput({ initialInvestment, annualInvestment, expectedReturn, duration }) {
    initialInvestment = 10000;
    annualInvestment = 1000;
    expectedReturn = 10;
    duration = 20;
    const result = calculateInvestmentResults({ initialInvestment, annualInvestment, expectedReturn, duration });

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {result.map(({ year, interest, valueEndOfYear, annualInvestment }) => (
                    <tr>
                        <td>{year}</td>
                        <td>{interest}</td>
                        <td>{valueEndOfYear}</td>
                        <td>{annualInvestment}</td>
                        <td>{annualInvestment}</td>
                    </tr>))}
            </tbody>
        </table>
    );
}