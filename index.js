const express = require("express")
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello to the first node")
})

app.listen(port, () => {
    console.log("Listening Port: ", port);
})
