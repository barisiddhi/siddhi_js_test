//Write a function using a rest parameter to calculate total transaction amount from multiple operations.

const totaltransactions = [200,400,500,300,100]
console.log(totaltransactions);
console.log(...totaltransactions);

//using an array
function sum(a,b=100){
    console.log(a+b);
}   
sum(50);
    