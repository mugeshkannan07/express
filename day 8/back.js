
// import necessary modules 
const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

// middleware for serving static file 
app.use(express.static(path.join(__dirname, 'public')));

// set the view engine to EJS 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

// define the roott route 
router.get('/',(req,res) => {
    // an Array of courses t pass to the view 
    const courses = [
        "PHP",
        "Laravel",
        "Angular",
        "React",
        "Node.js"
    ];

    // Render the 'index' view with dynamic data 
    res.status(200).render('index',{
        docTitle: "welcome to JVLcode1",
        courses,
        path:'index',
        coursesExsists: courses.length > 0,
        pageIndex: true,
        name:"mugesh",
        role:'Developer'
    });
});

// define the '/about' route 
router.get('/about', (req,res) => {
    const courses = ["PHP","Laravel","Angular","React","Nde.js"];

    // render the about view with dynamic data 
    res.status(200).render('about', {
        docTitle:"About US",
        courses,
        path:'about',
        coursesExsists: courses.length > 0,
        pageAbout: true,
        name:"About Page"
    });
});

// Handle 404 errors (page not found)
router.use((req,res) => {
    res.status(404).render('404',{
        docTitle:"404 - Page NOt Found",
         path:'404',
         page404: true
    });
});

// use the router for all routes 
app.use(router);

// start the server on port 8000
app.listen(8000, () =>{
    console.log('server running on http://localhost:8000');
});
