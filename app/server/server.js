const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
require('dotenv').config()

// Connecting to MongoDB
const uri = process.env.MONGODB_URI
mongoose.connect(uri, {useNewUrlParser: true , useUnifiedTopology: true})

// Users 
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    sat_score: Number,
    act_score: Number,
    f_name: String,
    l_name: String
})
const User = mongoose.model('User', userSchema)



app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.listen("3001", () => {
    console.log("Server started successfully on port 3001");
})

app.get('/test', (req, res) => {
    res.status(201).send({"message" : "page in dev"});
})

app.post('/register', (req, res) => {
    bcrypt.hash(req.body.password, 8, (err, hash) => {
        User.create({
            username: req.body.username,
            password: hash,
            sat_score: 0,
            act_score: 0,
            f_name: '',
            l_name: ''
        }).then( user => {
            console.log(`Successfully created user ${user}`)
        })    
        if (err) {
            console.log(err);
        }
    });
    
   
    res.status(200).send({"message" : "received register"})
})