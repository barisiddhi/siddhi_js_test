//21. Write an arrow function calculateInterest that calculates total interest based on balance and rate.
const calculateInterest = (balance, rate) => balance * rate;

const accounts = [30, 500, 100, 300, 500];
const interestRate = 0.05;

const totalInterest = accounts.reduce((sum, balance) => sum + calculateInterest(balance, interestRate), 0);

console.log(totalInterest);
