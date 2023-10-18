const express = require('express')
const app = express()

app.listen("3000", () => {
    console.log("Server started successfully on port 3000");
})

app.get('/', (req, res) => {
    res.status(200).send("Page in development");
})