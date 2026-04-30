//18. Show the use of a finally block when completing a transaction to ensure records are updated.
function updaterecord(){
    throw new Error("not implemented yet");
}

try {
    updaterecord();
    console.log("record updated successfully");

    
} catch (error) {
    console.log(error.name+ ":"+ error.message)
    
}

finally{
    console.log("records updated successfully")
}
