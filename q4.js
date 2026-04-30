"use strict";
class BankEmploye {
}
class Teller extends BankEmploye {
    getSalary() {
        console.log("salary is 30000");
    }
    getRole() {
        console.log("role is to teller ");
    }
}
class Manager extends BankEmploye {
    getSalary() {
        console.log("salary is 50000");
    }
    getRole() {
        console.log("role is to Managetr ");
    }
}
const l1 = new BankEmploye();
l1.getRole();
l1.getSalary();
