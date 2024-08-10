const express =  require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express(); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect('mongodb+srv://Gnanariddhika:Gnana_123@mern.607fh2x.mongodb.net/MERN')
.then(() =>{
    console.log("MongoDB Connected");
})

app.listen(3000, ()=> {
    console.log("Server started");
})
