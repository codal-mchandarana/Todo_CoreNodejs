const prompt = require("prompt-sync")();
const fs = require("fs").promises;
const path = require('path');
const filePath = path.join(__dirname,'Todo.txt');


const getDataFromFile = async (cb) => {
  const data = await fs.readFile(filePath, "utf-8");
  cb(data);
};

const writeDataToFile = async(TodoArr,msg)=>{
    let err = await fs.writeFile(filePath, JSON.stringify(TodoArr));

    if(!err)
       console.log(msg);
}

/* Program starts here */

console.log("Hello Welcome to my TodoList");

const msg =
  "Enter\n 1) For Adding a note\n 2) For Deleting a note\n 3) For Reading a note\n 4) For Updating a note";
console.log(msg);

const input = prompt();

/************ Adding Todo to the list ************/

if (input == 1) {
  console.log("Enter your todo item here");
  let value = prompt();

  const item = { id: 1, task: value };

  getDataFromFile((data) => {
    if (!data) {
      const arr = [item];
       writeDataToFile(arr,"Added Successfully");
    } else {
      const TodoArr = JSON.parse(data);
      item.id = parseInt(TodoArr.length + 1);
      TodoArr.push(item);
       writeDataToFile(TodoArr,"Added Successfully");
    }
  });
} 

/************ Deleting the item from the list ************/

else if (input == 2) {
  console.log("Enter the id of the item you want to delete");
  let id = prompt();

  getDataFromFile((data) => {
    if (data) {
      let TodoArr = JSON.parse(data);
      TodoArr = TodoArr.filter((item) => {
        return item.id != id;
      });

       writeDataToFile(TodoArr,"Deleted successfully");
    }
  });
}

/************ Reading all the todos ************/

else if (input == 3) {
  getDataFromFile((data) => {
    if (data) console.log(JSON.parse(data));
  });
} 

/************ Updating the todo ************/

else if(input == 4){
  console.log("Enter the id of the Todo you want to Update");
  let id = prompt();

  console.log("Enter the new Todo");
  let value = prompt();

  getDataFromFile((data) => {
    let TodoArr = JSON.parse(data);

    let obj = TodoArr.find((item) => {
      return item.id == id;
    });

    obj.task = value;

    writeDataToFile(TodoArr,"Updated Successfully")
  });
}
