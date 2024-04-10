const {getDataFromFile,writeDataToFile} = require('../Utils/Helper')

const addItemToFile = async(value)=>{
    let data = await getDataFromFile();

    const item = { id: 1, task: value };

    let arr = [];

    if(!data){
        arr = [item];
    }else{
        let dummyArr = JSON.parse(data);
        item.id = parseInt(dummyArr.length+1);
        dummyArr.push(item);
        arr = dummyArr
    }
    await writeDataToFile(arr,"Added Successfully !");
}

const DeleteTodoItem = async(id)=>{
    let data = await getDataFromFile();

    if(data){
        let TodoArr = JSON.parse(data);
        TodoArr = TodoArr.filter((item)=>{return item.id != id});
        await writeDataToFile(TodoArr,"Deleted Successfully !");
    }
}

const UpdateTodoItem = async(id,value)=>{
    let data = await getDataFromFile();

    let TodoArr = JSON.parse(data);
    let obj = TodoArr.find((item)=>{return item.id==id});

    obj.task = value;
    await writeDataToFile(TodoArr,"Updated Successfully !")
}

module.exports = {
    addItemToFile,
    DeleteTodoItem,
    UpdateTodoItem
}