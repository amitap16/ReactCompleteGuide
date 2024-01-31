// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)
export function calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
}) {
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
        const interestEarnedInYear = investmentValue * (expectedReturn / 100);
        investmentValue += interestEarnedInYear + annualInvestment;
        annualData.push({
            year: i + 1, // year identifier
            interest: interestEarnedInYear, // the amount of interest earned in this year
            valueEndOfYear: investmentValue, // investment value at end of year
            annualInvestment: annualInvestment, // investment added in this year
        });
    }

    return annualData;
}

// This function gives the expected result as par task assigned by tutor.
export function calculateInvestmentResults2({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
}) {
    const annualData = [];
    let investmentValue = initialInvestment;
    let totalInterest = 0;

    for (let i = 0; i < duration; i++) {
        const interestEarnedInYear = investmentValue * (expectedReturn / 100);
        investmentValue += interestEarnedInYear + annualInvestment;
        totalInterest += interestEarnedInYear;
        annualData.push({
            year: i + 1, // year identifier
            investmentValue: getFormattedValue(investmentValue), // investment value at end of year
            interestYear: getFormattedValue(interestEarnedInYear), // the amount of interest earned in this year
            totalInterest: getFormattedValue(totalInterest), // total amount of interest earned from start to till current year
            investedCapital: getFormattedValue(investmentValue - totalInterest), // total investment at end of year
        });
    }

    return annualData;

    function getFormattedValue(value) {
        return formatter.format(value);
    }
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
});
