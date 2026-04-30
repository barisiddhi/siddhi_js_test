//28. Demonstrate async/await to fetch and display account details.
// Simulating an asynchronous function to fetch account details
async function fetchAccountDetails(accountId: string): Promise<{ name: string; balance: number }> {   
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (accountId === "123") {
                resolve({ name: "John Doe", balance: 1000 });
            }
            else {
                reject(new Error("Account not found"));
            }
        }
        , 2000);
    } 
    );
}
  