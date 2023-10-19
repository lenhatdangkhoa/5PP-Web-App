const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

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
    console.log("received")
    res.status(200).send({"message" : "received register"})
})