const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.listen("3001", () => {
    console.log("Server started successfully on port 3001");
})

app.get('/test', (req, res) => {
    res.status(201).send({"message" : "page in dev"});
})