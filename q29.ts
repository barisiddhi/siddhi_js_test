//Write a function using a default parameter to calculate service charges.
function calculateServiceCharge(amount: number, serviceChargeRate: number = 0.1): number {
    return amount * serviceChargeRate;
}


const totalAmount = 100;
const serviceCharge = calculateServiceCharge(totalAmount);
console.log(`The service charge for an amount of ${totalAmount} is: ${serviceCharge}`);
