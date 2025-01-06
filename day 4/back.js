
// example 1
 
const express = require('express');
const bodyParser = require('body-parser');


const app = express();

// middleware to parse body data
app.get('/form', (req, res) => {
    res.send(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Submit Your Details</h1>
    <form action="/submit" method="POST">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required> <br> <br>
        <label for="age">Age:</label>
        <input type="number" id="age" name="age" required>
        <br><br>
        <button type="submit">Submit</button>
    </form>
</body>
</html>
   `);
});

// Route to handle form data 
app.post('/submit', (req,res) => {
    console.log(req.body);
    res.send(`<h1>Hello ${req.body.name}, you are ${req.body.age} years old!</h1>`);
});

// start the server 
app.listen(8080, () => {
    console.log('server running at http://localhost:8080'); 
});







// example 2
 
// const express = require('express');
// const bodyParser = require('body-parser');


// const app = express();

// // middleware to parse body data
// app.get('/form', (req, res) => {
//     res.send(`
//         <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <h1>Submit Your Details</h1>
//     <form action="/submit" method="POST">
//         <label for="name">Name:</label>
//         <input type="text" id="name" name="name" required> <br> <br>
//         <label for="age">Age:</label>
//         <input type="number" id="age" name="age" required>
//         <br><br>
//         <button type="submit">Submit</button>
//     </form>
// </body>
// </html>
//    `);
// });

// // Route to handle form data 
// app.post('/submit', (req,res) => {
//     console.log(req.body);
//    res.json({
//     message: `Hello ${req.body.name}, you are ${req.body.age} years old!`
//    })
// });

// // start the server 
// app.listen(3000, () => {
//     console.log('server running at http://localhost:3000'); 
// });


