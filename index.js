const express = require('express');

const bodyParser = require('body-parser');
const usersRoutes = require('./routes/users');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res)=>  res.send("<h1>HELL0 :)</h1>"))

app.listen(5000, ()=> console.log("server running at 5000...."));