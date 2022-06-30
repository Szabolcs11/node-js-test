const express = require('express')
const app = express();
const port = 2000;

app.get('/', (req, res) => {
    return res.status(200).json({
        succes: true,
        message: "Yes"
    })
})

app.listen(port, () => {
    console.log("Server listening")
})