
//Write a function findTopCustomer that returns the customer with the highest account balance.

const customers= {
    id: [100001901, 100001902, 100001903],
    name: ["Siddhi", "Harry", "John"],
    balance: [50000, 60000, 55000]
}
function findTopCustomer(customers){
    let maxBalance = 0;
    let topCustomer = "";       
    for(let i=0; i<customers.balance.length; i++){
        if(customers.balance[i] > maxBalance){
            maxBalance = customers.balance[i];
            topCustomer = customers.name[i];
        }   }
    return topCustomer;
}   