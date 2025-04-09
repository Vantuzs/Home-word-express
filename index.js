const express = require('express');

const PORT = 5000;
const app = express();


const {createTask,getTasks,getTaskById,updateTaskById,deleteTaskById} = require('./controllers/tasksControllers')
app.use(express.json())

app.get('/', (req,res)=>{
    res.status(418).send('Hello wordl')
})
app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
})

app.post('/tasks', createTask);
app.get('/tasks', getTasks);
app.get('/tasks/:taskId', getTaskById);
app.put('/tasks/:taskId',updateTaskById);
app.delete('/tasks/:taskId',deleteTaskById)