const Task = require("../models/Task");

// const {v4: uuidv4} = require('uuid');

module.exports.createTask = (req,res,next) =>{
    const {body} = req;
    const task = new Task(body);
    task.addTask();

    res.status(201).send(task)
}

module.exports.getAllTasks = (req,res) =>{
    res.status(201).send(Task.findAll())
}

module.exports.getTaskById = (req,res) =>{
    const {params: {taskId}} = req;

    const foundTask = Task.findOne(Number(taskId))
    
    if(!foundTask){
        res.status(404).send('Task not found')
    }

    res.status(200).send(foundTask)
};

module.exports.deleteTask = (req,res) =>{
    const {params: {taskId}} = req;
    
    const foundTask = Task.findOne(Number(taskId))
    const deleteTask = Task.deleteTask(Number(taskId))

    if(!deleteTask){
        res.status(404).send('task not found')
    }

    res.status(200).send(foundTask)
}

module.exports.updateTask = (req,res) => {
    const {body,params: {taskId}} = req;

    const task = Task.findOne(Number(taskId));
    if(task){
        const updatedTask = task.updateTask(body)
        res.status(200).send(updatedTask)

    }else{
        res.status(404).send('task not found')
    }
}

const id = 123

const tasks = [
    {
        id: 1,
        text: 'it`s time for a party',
        isResolve: false
    },
    {
        id: 2,
        text: 'it`s time to drik coffee',
        isResolve: true
    }
];


// module.exports.createTask = (req,res)=>{
//     const {body} = req;
//     let lastElem = tasks[tasks.length-1]
//     console.log(lastElem);
// // console.log(body);
//     const createTask = {...body, id: tasks.length+1};
//     tasks.push(createTask)

//     res.status(200).send(createTask);
// };

// module.exports.getTasks = (req,res) =>{
//     res.status(200).send(tasks);
// }

// module.exports.getTaskById = (req,res) =>{
//     const {params: {taskId}} = req;

//     const foundTask = tasks.filter(t => t.id === Number(taskId))
    
//     if(!foundTask){
//         res.status(404).send('Task not found')
//     }

//     res.status(200).send(...foundTask)
// };

module.exports.updateTaskById = (req,res) =>{
    const {params: {taskId}, body} = req;

    const [filteredTasks] = tasks.filter(task => task.id === Number(taskId));
    const foundTaskIndex = tasks.findIndex(t => t.id === Number(taskId));
    // console.log(filteredTasks);
    if(filteredTasks.length === tasks.length){
        res.status(404).send('Task not found');
    }

    // delete tasks[filteredTasks.id]
    console.log(foundTaskIndex);
    tasks[foundTaskIndex] = {...filteredTasks,...body};
    res.status(200).send(tasks[foundTaskIndex])
};

module.exports.deleteTaskById = (req,res) =>{
    const {params: {taskId}} = req;
    // console.log(taskId);

    const filteredTasks = tasks.filter(tasks => tasks.id !== Number(taskId));
    console.log(filteredTasks);
    if(filteredTasks.length === tasks.length){
        return res.status(404).send('Task not found');
    }

    // tasks.length = 0;
    tasks.length = 0
    tasks.push(filteredTasks)
    res.status(200).send(`Delete task id ${taskId}`)
};