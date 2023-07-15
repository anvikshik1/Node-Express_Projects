const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
require('dotenv').config();


// middleware
app.use(express.json());
app.use(express.static('./public'));
// app.use(express.urlencoded({ extended: true }));

//router
app.get('/', (req,res) => {
    res.send('Task Manager App')
})

app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

// app.get('/api/v1/task')          - get all the tasks
// app.post('/api/v1/task')         - create a new task
// app.get('/api/v1/task/:id')      - get single task
// app.patch('/api/v1/task/:id')    - update task
// app.delete('/api/v1/task/:id')   - delete task

const port = 3000;

const start = async () =>{
    try{
       await connectDB(process.env.MONGO_URL);
       app.listen(port, console.log(`Server port listening on ${port}...`))
    }catch(err){
        console.log(err);
    }
}

start();