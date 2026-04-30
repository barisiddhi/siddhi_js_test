class Branch{
    constructor(Branch_name, Branch_code, Branch_address){
        this.Branch_name = Branch_name;
        this.Branch_code = Branch_code;
        this.Branch_address = Branch_address;
     }
        
    }   
const B1 = new Branch("Downtown", "B001", "123 SBI");
const B2 = new Branch("Uptown", "B002", "456 AXIS");
console.log(B1);
console.log(B2);