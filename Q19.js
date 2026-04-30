//19. Create a user-defined exception called InvalidAccountException and demonstrate its usage.
class InvalidAccountException extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidAccount";
    }
}

function ValidAccount(ticket) {
    if (Account< 20000) {
        try {
            throw new Error("Account is not valid");
            
        } catch (error) {
            console.log(error.name+ ":" + error.message);
            
            
        }
    } else {
        console.log("Account updated Successfully");
        
        
    }
    

}
ValidAccount(30000);
ValidAccount(2000);