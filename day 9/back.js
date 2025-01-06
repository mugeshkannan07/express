
// const express = require('express');

// const {check, validationResult} = require('express-validator');

// const  app = express();

// app.use(express.json());

// app.use(express.urlencoded({ extended: true}));

// app.post('/register', [
//     check('name')
//     .notEmpty().withMessage('Name is required')
//     .isLength({min:3}).withMessage('Name must be atleast 3 characters long'),
//     check('email')
//     .isEmail().withMessage('invalid email format'),
//     check('password')
//     .isLength({min:6}).withMessage('password must be at least 6 character long'),

//     check('confirmPassword').custom((value, {req}) => {
//         if(value !== req.body.password) {
//             throw new Error('passwords do not match');
//         }
//         return true;
//     }),
// ],
// (req,res) => {
//     const errors = validationResult(req);
//     if(!errors.isEmpty()) {
//         return res.status(400).json({errors: errors.array()});
//     }
//     res.status(200).send('Registration successfully');
// });

// app.listen(5000, () => console.log('server is running on http://localhost:5000'));










const express = require('express');
const app = express();

// serve static file 
app.use(express.static('public'));

// import routes 
const indexRoutes = require('./routes/index');
const postRoutes = require('./routes/posts');

// use routes 
app.use('/', indexRoutes);
app.use('/posts', postRoutes);

app.listen(3000, () => console.log('server is running on http://localhost:3000'));

