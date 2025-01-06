// express use app as the centeral app object 

// import the express module
// const express = require('express');

// // create an express app 
// const app = express();

// const PORT = 3000;

// // create basci route 
// app.get('/', (req,res) => {
//     res.send('welcome to express!');
// });

// // start the server 
// app.listen(PORT, () => {
//     console.log(`server is running on http://localhost: ${PORT}`);
// });




// code example: route parameters

// const express = require('express');
// const app = express();
// const PORT = 4000;

// app.get('/users/:id', (req,res) => {
//   const userId = req.params.id; 
//   res.send(`User ID is ${userId}`);
// });

// app.listen(PORT, () => {
//     console.log(`server is running on http://localhost:${PORT}`);
// });




// code example: querey parameters

// const express = require('express');
// const app = express();
// const PORT = 8080;

// app.get('/search', (req,res) => {
//     const name = req.query.name;
//     const age = req.query.age;
//     res.send(`searching for user with name: ${name} and age: ${age}`);
// });

// app.listen(PORT,() => {
//     console.log(`server is running n http://localhost:${PORT}`);
// });



// combining route and query parameters 

// const express = require('express');
// const app = express();

// app.get('/users/:id/details', (req,res) => {
//     const userId = req.params.id;
//     const sortBy = req.query.sortBy;
//     res.send(`User ID: ${userId}, sort by: ${sortBy}`);
// });

// app.listen(3000, () => {
//     console.log('server is running on http://localhost:3000');
// });

// http://localhost:3000/users/101/details?sortBy=mugesh



// Dynamic routing and user cases 
// use multiple route parameters 

// const express = require('express');
// const app = express();

// app.get('/store/:category/productId', (req,res) => {
//         const category = req.params.id;
//         const productId = req.query.sortBy;
//         res.send(`User ID: ${category}, sort by: ${productId}`);
//     });
    
//     app.listen(3000, () => {
//         console.log('server is running on http://localhost:3000');
//     });




// fetch user details by id 
// const express = require('express');
// const app = express();

// app.get('/users/:id', (req,res) => {
//       const UserId = req.params.id;
//       const age = req.query.age;
//       const location = req.query.location;
//       res.send(`User ID: ${UserId}, Age: ${age}, location:${location}`);
// });

// app.listen(3000, () => {
//     console.log('server is running on http://localhost:3000');
// });
// http://localhost:3000/users/33?age=23&location=tnj





// import the express module
// const express = require('express');

// // initialixe the app 
// const app = express();
// const PORT = 3000;

// // mock data for blogs and comments 
// const blogs = [
//     {id: 1, title: 'Introduction to express', content: 'learn about express.js basics.'},
//     {id: 2, title: 'routing the express', content: 'how to handle routes efficiently in express.'}
// ];

// const comments = [
//     {blogId: 1, author:'alice', comment: 'great explanation!'},
//     {blogId: 1, author:'bob', comment: 'loved the examples!'},
//     {blogId: 1, author:'alice', comment: 'dynamic routing!'},
//     {blogId: 1, author:'charlie', comment: 'love to see more example!'}
// ];

// // rute fetch blog details by ID 

// app.get('blog/:id',(req,res) => {
//     const blogId = parseInt(req,params.id);
//     const blog = blogs.find(b =>b.id === blogId);

//     if (blogs) {
//         res.json(blg);
//     } else {
//         res.status(404).json({ error: 'blog not fund'});
//     }
// });

// // route fetch comments for a blog 
// app.get('blog/:id/comments', (req,res) => {
//     const blogId = parseInt(req,params.id);

//     const author = req.query.author;

//     // filter cmments for the blog 
// const filteredComments = comments.filter(comment => comment.blogId === blogId);

// if (author) {
//     const authorFiltered = filteredComments.filter(comment => comment.author === author);
//     res.json(authorFiltered.length > 0 ? authorFiltered : {message: 'No comments found for this author.'});
// } else {
//     res.json(filteredComments.length > 0 ? filteredComments : {message: 'No comments found for this blog.'});
// }
// });

// app.listen(PORT, () => {
//     console.log(`server is running n http://localhost:${PORT}`);
// });