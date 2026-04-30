class Account{
    constructor(Account_id,Account_name, Account_balance){
        this.Account_id = Account_id;
        this.Account_name = Account_name;
        this.Account_balance = Account_balance;
     }
        
    }   
const A1 = new Account(100001901, "Siddhi", 50000);
const A2 = new Account(100001902, "Harry", 60000);
console.log(A1);
console.log(A2);