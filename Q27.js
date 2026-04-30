//27. Demonstrate a Promise that simulates checking transaction status.

function checkTransactionStatus(status) {       
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (status === "success") {                 

                resolve("Transaction completed successfully.");
            } else {
                reject(new Error("Transaction failed due to server issues."));      
            }
        }
        , 2000);
    });
}

checkTransactionStatus("success")
    .then(result => console.log(result))
    .catch(error => console.log(error.message));
    