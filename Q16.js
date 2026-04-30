function withdrawl( id,tile){
    if (id ==undefined || title == undefined){
        throw new Error("invalid id");
    }
    return " account isuuued successfully";

}

try{
    const result = withdrawl(1,"account1");
    console.log(result);
}
catch(error){
    console.log(error.id+ ": "+error.message);

}

finally{
    console.log("Operation completed");
}