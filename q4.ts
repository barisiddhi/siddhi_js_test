abstract class BankEmploye{
    abstract getSalary():void;
    abstract getRole():void;
}
class Teller extends BankEmploye{
    getSalary():void{
        console.log("salary is 30000")
    }
    getRole():void{
        console.log("role is to teller ")
    }
}
class Manager extends BankEmploye{
    getSalary():void{
        console.log("salary is 50000")
    }
    getRole():void{
        console.log("role is to Managetr ")
    }
}

const l1 = new BankEmploye();
l1.getRole();
l1.getSalary();