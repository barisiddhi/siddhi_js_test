function display_books(status){
    return new Promise((resolve,reject)=>{
        if (status){
            resolve([{
                id :1,
                title:"book1",
{
            id:2,
             title:"book2"
}            }
]);
        }
        else{
            reject("No books available");
        }

    });
}
