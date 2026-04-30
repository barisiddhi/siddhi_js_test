// Demonstrate array methods:
// a. map → to add interest to balances
// b. filter → to find high-value accounts
// c. reduce → to calculate total bank deposits

const extrafines = [200,400,500,300,100]
console.log(extrafines);
console.log(...extrafines);

//using an array
function sum(a,b=100){
    console.log(a+b);
}
sum(50);