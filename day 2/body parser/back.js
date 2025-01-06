


// bodyparser.urlcoded--------
const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const PORT = 3000;

// middleware to parse from data --
app.use(bodyparser.urlencoded({extended: true}));

app.post('/submit', (req,res) => {
    const formData = req.body;
    res.send(`form data received: ${JSoN.stringify(formData)}`);
});

app.listen(PoRT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});





// const express = require('express');
// const bodyparser = require('body-parser');
// const app = express();
// const PORT = 3000;

// app.use(bodyparser.urlencoded({extended: true}));

// // serve an HTML form 
// app.get('/', (req,res) => {
// res.send(`
//      <h1>Submit your info</h1>
//     <form action="/submit" method="POST">
//         <label for="name">Name:</label>
//         <input type="text" id="name" name="name" required> 
//         <br>
//         <label for="age">Age:</label>
//         <input type="number" id="age" name="age" required> 
//         <br>
//         <button type="submit">Submit</button>
//     </form>
//     `)
// });

// // handle form -
// app.post('/submit', (req,res) => {
//     const {name,age} = req.body;
//     res.send(`Thank you, ${name}. you are ${age} years old.`);
// });

// app.listen(PORT, () => {
//     console.log(`server is running at http://localhost:${PORT}`);
// });