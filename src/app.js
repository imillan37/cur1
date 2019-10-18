const express = require('express');
const app = express();

const Task = require('./model/tareas');

//settings
app.set('views',__dirname + '/views');
app.set('view engine','ejs');

//midelwares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//list
app.get('/', async (req , res)=>{

    const tasks = await Task.find();
    res.render('index', {tasks});
});

// post create
app.post('/create', async (req, res) => {

   const newTask = new Task({
        task: req.body.tarea,
        description: req.body.description
    });
    //console.log(newTask);
    await newTask.save();
    res.send('recibido');
});
//statuc files
app.use(express.static(__dirname + '/public'));

module.exports = app;