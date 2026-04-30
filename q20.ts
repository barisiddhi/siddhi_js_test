//20. Use throw to generate an error when a transaction amount exceeds allowed limits.
function Account( id,name){
    if (id ==undefined || name == undefined){
        throw new Error("invalid id");
    }
    return " Account isuuued successfully";

}

try{
    const result = Account(1,"saving");
    console.log(result);
}
catch(error){
    console.log(error.id+ ": "+error.message);

}

finally{
    console.log("Operation completed");
}