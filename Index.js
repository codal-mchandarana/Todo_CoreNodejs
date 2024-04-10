const prompt = require("prompt-sync")();
const {addItemToFile, DeleteTodoItem, UpdateTodoItem} = require('./TodoFunction/Funcs');
const {getDataFromFile} = require('./Utils/Helper');
const mainFunction = async () => {
    const msg =
        "Enter\n 1) For Adding a note\n 2) For Deleting a note\n 3) For Reading a note\n 4) For Updating a note";
    console.log(msg);

    const input = prompt();

    switch (parseInt(input)) {
        case 1:
            console.log("Enter your todo item here");
            let value = prompt();
            await addItemToFile(value);
            break;

        case 2:
            console.log("Enter the id of the item you want to delete");
            let id = prompt();
            await DeleteTodoItem(id)
            break;

        case 3:
            const data = await getDataFromFile();
            console.log(JSON.parse(data));
            break;

        case 4:
            console.log("Enter the id of the Todo you want to Update");
            let id1 = prompt();
            console.log("Enter the new Todo");
            let task = prompt();
            await UpdateTodoItem(id1, task);

    }
}

console.log("Hello Welcome to my TodoList");

let n = 1;

(async ()=>{
    while (n==1){
        // const dummy = async ()=>{await mainFunction()}
        await mainFunction();
        console.log("Enter 1 for Continue and 0 for Exit");
        n = prompt();
    }
})()


