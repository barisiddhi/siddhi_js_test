interface TransactionServicet{
    transaction():void;

}

class Teller implements TransactionServicet{
    issueBook(): void {
        console.log("Book issued successfully");
    }
