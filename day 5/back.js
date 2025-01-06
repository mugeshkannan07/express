
// Updated resource using PUT and PATCH----------------

// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(bodyParser.json());

// // sample user data 
// let user = {
//     id: 1,
//     name: 'mugesh',
//     age: 23,
//     email:'mugesh71536@gmail.com'
// };

// // PUT endpoint: replace the user resource  
// app.put('/user', (req,res) => {
//     console.log('user', user);
//     console.log('req.body',req.body)
//     user = { ...req.body};
//     res.json({
//         message: 'user updated successfully using PUT!',user
//     });
// });

// // PATCH endpoint 
// app.patch('/user', (req,res) => {
//     console.log('user', user);
//     console.log('req.body',req.body)
//     user = { ...user, ...req.body};
//     res.json({
//         message:'user updated successfully using PATCH!',user,
//     });
// });

// // start the server 
// app.listen(3000, () => {
//     console.log('server running at http://localhost:3000');
// });




const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

// middleware to parser JSON request bodies 
app.use(bodyParser.json());

// temprary in memory 
let users = [
    {id: 1, name: "mugesh", email: "mugesh71536@gmail.com"},
    {id: 2, name: "alice", email: "alice@gmail.com"}
];

// endpoint to get all users 
app.get('/users', (req,res) => {
    res.json(users);
});

// endpoint to update a user 
app.put('/users/:id', (req,res) => {
    const userId = parseInt(req.params.id);
    const { name,email } = req.body;

    // find the user by id 
    const user = users.find((u) => u.id === userId);

    if(!user) {
        return res.status(404).json({message: "user not found"});
    }

    // update user details 
    if(name) user.name = name;
    if(email) user.email = email;

    res.json({message:"user updated successfully", user});
});

// start the server 
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});