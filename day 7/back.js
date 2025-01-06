
// const express = require('express');
// const multer = require('multer');
// const path = require('path');
// const app = express();
// const PORT = 3000;

// const storage = multer.diskStorage({
//     destination: (req,file,cb) => {
//         cb(null, 'uploads/');
//     },
//     filename:(req,file,cb) => {
//         cb(null, `${Date.now()}-${file.originalname}`);
//     }
// });

// // multer storage 
// const upload = multer({storage});

// // middleware to parse json 
// app.use(express.json());

// // server static html file 
// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname,'one.html'));
// });

// // handle file upload 
// app.post('/upload', upload.single('file'), (req,res) => {
//     res.status(200).send({
//         message: 'file uploaded successfully',
//         file: req.file
//     });
// });

// app.listen(PORT, () => {
//     console.log(`server running on http://localhost:${PORT}`);
// });





// upload multiple files 

// const express = require('express');
// const multer = require('multer');
// const path = require('path');
// const app = express();
// const PORT = 3000;

// const storage = multer.diskStorage({
//     destination: (req,file,cb) => {
//         cb(null, 'uploads/');
//     },
//     filename:(req,file,cb) => {
//         cb(null, `${Date.now()}-${file.originalname}`);
//     }
// });

// // multer storage 
// const upload = multer({storage});

// app.use(express.json());

// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname,'one.html'));
// });

// // handle multiple file uploads 
// app.post('/upload', upload.array('file', 10), (req,res) => {
//     if(!req.files || req.files.length === 0) {
//         return res.status(400).send({message: 'no files were uploaded.'});
//     }
//     res.status(200).send({
//         message: 'file uploaded successfully',
//         file: req.files
//     });
// });

// app.listen(PORT, () => {
//     console.log(`server running on http://localhost:${PORT}`);
// });





const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// set HBS as the template engine 
app.set('view engine', 'hbs');

// serve static files 
app.use(express.static(path.join(__dirname, 'public')));

// define a route to render an ejs template 
app.get('/dashboard-ejs', (req,res) => {
    const user = {name: 'Mugesh', role:'Admin', tasks:['Approve post', 'Review reports', 'manage users']};
    res.render('index', user);
});




// set EJS as the template engine 
// app.set('view engine', 'ejs');

// // define a route to render an ejs template 
// app.get('/dashboard-ejs', (req,res) => {
//     const user = {name: 'bob', role:'editor', tasks:['edit aricles', 'approve comments', 'update profiles']};
//     res.render('index', user);
// });

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});