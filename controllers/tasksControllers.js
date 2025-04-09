// const {v4: uuidv4} = require('uuid');

const id = 123

const tasks = [
    {
        id: 1,
        text: 'it`s time for a party'
    },
    {
        id: 2,
        text: 'it`s time to drik coffee'
    }
];


module.exports.createTask = (req,res)=>{
    const {body} = req;
    let lastElem = tasks[tasks.length-1]
    console.log(lastElem);
// console.log(body);
    const createTask = {...body, id: new Date().getTime()};
    tasks.push(createTask)

    res.status(200).send(createTask);
};

module.exports.getTasks = (req,res) =>{
    res.status(200).send(tasks);
}

module.exports.getTaskById = (req,res) =>{
    const {params: {taskId}} = req;

    const foundTask = tasks.filter(t => t.id === Number(taskId))
    
    if(!foundTask){
        res.status(404).send('Task not found')
    }

    res.status(200).send(...foundTask)
};

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