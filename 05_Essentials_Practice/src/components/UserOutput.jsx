import { calculateInvestmentResults, formatter } from "../util/investment";

export default function UserOutput({ inputData }) {
    const result = calculateInvestmentResults(inputData);
    let totalInterest = 0;

    return (<table id="result">
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
            {result.map((yearData) => {
                totalInterest += yearData.interest;
                const investedCapital = yearData.valueEndOfYear - totalInterest;

                return (<tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(investedCapital)}</td>
                </tr>)
            })}
        </tbody>
    </table>
    );
}