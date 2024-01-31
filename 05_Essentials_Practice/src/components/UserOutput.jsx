export default function UserOutput({ result }) {
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
                {result.map(({ year, investmentValue, interestYear, totalInterest, investedCapital }) => (
                    <tr>
                        <td>{year}</td>
                        <td>{investmentValue}</td>
                        <td>{interestYear}</td>
                        <td>{totalInterest}</td>
                        <td>{investedCapital}</td>
                    </tr>))}
            </tbody>
        </table>
    );
}