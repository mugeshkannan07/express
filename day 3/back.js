
const express = require('express');
const app = express();

// POST route --
app.post('/submit-form', (req,res) => {
    res.send('Form submitted successfully!');
});

app.listen(3000, () => console.log('server running on http://localhost:3000'));





// without middleware 
// const express = require('express');
// const app = express();

// app.get('/hello', (req,res) => {
//         res.send('hello, world!');
//     });

//   app.listen(4000, () => console.log('server running on http://localhost:4000'));




// const express = require('express');
// const app = express();

// // middleware logs request details 
// app.use((req, res, next) => {
//     console.log(`request method: ${req.method}. URL: ${req.url}`);
//     next();
// });

// app.get('/', (req,res) => {
//     res.send('welcome to express with middleware!');
// });

// app.listen(8080, () => console.log('server running on http://localhost:8080'));





// 2. with middleware ---------------
// const express = require('express');
// const app = express();

// // middleware logs request details 
// app.use((req, res, next) => {
//     console.log(`Request method: ${req.method}.Request URL: ${req.url}`);
//     next();
// });

// app.get('/hello', (req,res) => {
//     res.send('hello, middleware!');
//  });

//  app.listen(3030, () => console.log('server running on http://localhost:3030'));




// middleware runs in the order -------------------
// const express = require('express');
// const app = express();

// // middleware logs request details 
// app.use((req, res, next) => {
//     console.log('Middleware 1: Loggging request');
//     next();
// });

// // middleware 1: log request 
// app.use((req, res, next) => {
//     res.setHeader('X-custom-header','Middleware example');
//     console.log('Middleware 2:Added custom header');
//     next();
// });

// app.get('/', (req,res) => {
//     res.send('Middleware chain complete!');
//     console.log('home page router');
// });

// app.listen(4001, () => console.log('server running on http://localhost:4001'));




// route specific middleware --------
// const express = require('express');
// const app = express();

// app.use('/hello', (req, res, next) => {
//     console.log(`Middleware for /hello: ${req.method} ${req.url}`);
//     console.log('mid 1');
//     next();
// });

// app.get('/hello', (req, res) => {
//    res.send('Hello with middleware!');
//    console.log('route 2');
// });

// app.get('/world', (req, res) => {
//     res.send('world without middleware!');
//     console.log('route 3');
//  });

// app.listen(8001, () => console.log('server running on http://localhost:8001'));




// Error handling middleware -------
// const { error } = require('console');
// const express = require('express');
// const app = express();

// // middleware to simulate error --
// app.use((req, res, next) => {
//     const error = new Error('something went wrng!');
//     next(error);
// });

// // Error handling middleware 
// app.use((err,req,res,next) => {
//     console.error(err.message);
//     res.status(500).send('Intrenal server Error!');
// });

// app.listen(3001, () => console.log('server running on http://localhost:3001'));
