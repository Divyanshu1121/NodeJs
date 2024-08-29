const express = require('express');
const port = 8081;
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded());

let students = [
    {
        id: 11,
        name: "Dev",
        email: "dev@gmail.com",
        password: "dev@123",
    },
    {
        id: 12,
        name: "Vansh",
        email: "vansh@gmail.com",
        password: "vansh@123",
    },
    {
        id: 13,
        name: "Kiyan",
        email: "kiyan@gmail.com",
        password: "kiyan@123",
    },
    {
        id: 14,
        name: "Krish",
        email: "krish@gmail.com",
        password: "krish@123",
    },
    {
        id: 15,
        name: "Raj",
        email: "raj@gmail.com",
        password: "raj@123",
    }
]

app.get('/', (req, res) => {
    // console.log(students);
    return res.render('form', {
        students
    });
})

app.post('/insertData', (req, res) => {
    students.push(req.body);
    return res.redirect('/');
})

app.listen(port, (err) => {
    if (err) {
        console.log("Server Not Started");
        return false;
    }
    console.log("Server Start http://localhost:" + port);

})