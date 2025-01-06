
// DELETE -------------------------------------

// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = 3000;

// app.use(bodyParser.json());

// // temporary in memory 
// let users = [
//     {id:1, name: "mugesh", email:"mugesh71536@gmail.com"},
//     {id:2, name: "alice", email:"alice@gmail.com"}
// ];
// console.log(users)

// // DELETE endpint
// app.delete('/users/:id', (req,res) => {
//     const userId = parseInt(req.params.id);

//     const userIndex = users.findIndex((u) => u.id === userId);
//     console.log('userIndex', userIndex)
//     if (userIndex === -1) {
//         return res.status(404).json({message: "user not found"});
//     }

//     users.splice(userIndex, 1);
//     res.json[{message: "user deleted successfully"}];
//     console.log(users)
// });

// app.listen(PORT, () => {
//     console.log(`server is running on http://localhost:${PORT}`);
// });




// create middleware -------
// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = 4000;

// app.use(bodyParser.json());

// // custom request 
// const requestlogger = (req,res,next) => {
//     const method = req.method;
//     const url = req.url;

//     const timestamp = new Date().toISOString();
//     console.log(`[${timestamp} ${method} ${url}]`);
//     next();
// };

// // use the middleware 
// app.use(requestlogger);

// let users = [
//     {id:1, name: "mugesh", email: "mugesh71536@gmail.com"},
//     {id:1, name: "alice", email: "alice@gmail.com"}
// ];

// // GET users route 
// app.get('/users', (req,res) => {
//     res.json(users);
// });

// // DELETE 
// app.delete('/users/:id', (req,res) => {
//     const userId = parseInt(req.params.id);
//     const userIndex = users.findIndex((u) => u.id === userId);

//     if(userIndex === -1) {
//         return res.status(404).json({message: "user not found"});
//     }

//     users.splice(userIndex, 1);
//     res.json({message: "user deleted successfully"});
//     console.log(users)
//  });

//  app.listen(PORT, () => {
//     console.log(`server is running on http://localhost:${PORT}`);
//  });






// custom middleware 

// const express = require('express');
// const app = express();

// const logger = (req,res,next) => {
//     console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
//     next();
// };

// // use the middleware 
// app.use(logger);

// app.get('/', (req,res) => {
//     res.send('hello, world!');
// });

// app.get('/about', (req,res) => {
//     res.send('about, page!');
// });

// const PORT = 8000;
// app.listen(PORT, () => {
//     console.log(`server is running on http://localhost:${PORT}`);
// });
    



// Express.json()
// used to parse incoming json payloads 
// const express = require('express');
// const app = express();
// const PORT = 8080;

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// // route to serve the HTML form 
// app.get('/', (req,res) => {
//     res.send(`
//         <html>
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Middleware example</title>
// </head>
// <body>
//     <h1>Submit Data</h1>
//     <form method="POST" action="/submit">
//         <label for="name">Name:</label>
//         <input type="text" id="name" name="name" required> <br> <br>
//         <label for="email">email:</label>
//         <input type="email" id="email" name="email" required> <br> <br>
//         <button type="submit">Submit</button>
//     </form>
// </body>
// </html>`)
// });

// // route to handle form submission 
// app.post('/submit',(req,res) => {
//     const {name,email} = req.body;
//     res.send(`
//         <h1>Data Received</h1>
//         <p>Name: ${name}</p>
//         <p>Email: ${email}</p>
//     `);
// });
// app.listen(PORT, () => {
//     console.log(`server is running on http://localhost:${PORT}`);
// });


const express = require('express');
const path = require('path');

const app = express();
const port = 3030;

app.use(express.static(path.join(__dirname,"book")));
console.log('__dirname',__dirname)

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});
    