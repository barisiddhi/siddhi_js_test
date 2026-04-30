//Demonstrate array and object destructuring to extract customer names and branch  details.
//array and object destructuring

const customer =[{
    name: "John",
    age: 30,
    branch: "New York",
},
{
    name: "Siddhi",
    age: 25,
    branch: "Los Angeles",
}] 

const [customer1, customer2] = customer;
console.log(customer1.name);    
console.log(customer2.name);    