const fs = require("fs").promises;
const path = require("path");
const filePath = path.join('C:\\Users\\mchandarana\\Documents\\Code\\NodeJs\\project\\Todo','Todo.txt');

const getDataFromFile = async()=>{
    const data = await fs.readFile(filePath,"utf-8");
    return data;
}

const writeDataToFile = async(TodoArr,msg)=>{
    let err = await fs.writeFile(filePath, JSON.stringify(TodoArr));

    if(!err)
        console.log(msg);
}

module.exports = {getDataFromFile,writeDataToFile};