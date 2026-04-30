//Demonstrate exception propagation when a transaction fails due to server issues.

//Eroro Propogationn

function addAccount(){
    throw new Error("Account is invalid");
}

function accountservicess(){
    addAccount();
}

function Accounts(){
    try {
        accountservicess    } catch (error) {
        console.log(error.name+ ":" + error.message);
        
    }
}

Accounts();