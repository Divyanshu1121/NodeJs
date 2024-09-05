const express = require('express');
const port = 8081;
const app = express();

app.set('view engine', "ejs");

app.listen(port, (err) => {
    if (!err) {
        console.log("Server Started on http://localhost:" + port);
    }
})