const express = require('express');

const PORT = 5000;
const app = express();
const TaskController = require('./controllers/TaskControllers')
const {errorHandlers,validation} = require('./middleware')


// const {getTasks,getTaskById,updateTaskById,deleteTaskById} = require('./controllers/tasksControllers')
app.use(express.json())

app.get('/', (req,res)=>{
    res.status(418).send('Hello wordl')
})
app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
})

app.post('/tasks',validation.validateTaskCreate,TaskController.createTask);
app.get('/tasks', TaskController.getAllTasks);
app.get('/tasks/:taskId', TaskController.getTaskById);
app.delete('/tasks/:taskId',TaskController.deleteTask)
app.put('/tasks/:taskId',TaskController.updateTask);

app.use(errorHandlers.errorHandler)
