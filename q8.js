"use strict";
class Customer_support {
    name;
    employeis;
    department;
    exp;
    constructor(name, employeis, department, exp) {
        this.name = name;
        this.employeis = employeis;
        this.department = department;
        this.exp = exp;
    }
    display() {
        console.log(this.name + " " + this.employeis + " " + this.department + " " + this.exp);
    }
}
const customer = new  Customer_support("John", 10, "Service", 5);
customer.display();
