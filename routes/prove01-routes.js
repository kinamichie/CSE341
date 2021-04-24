const path = require('path');

const express = require('express');

const router = express.Router();


router.get('/', (req, res, next) => {
    //console.log('test');    
    res.write('<html>');    
    res.write('<style>');
    res.write('body { background-color: #8e9aaf} h1 {padding: 1em; text-align: center;} button:hover {color: white; background-color:black;}');
    res.write('</style>');
    res.write('<body>');
    res.write('<h1>Hello! Please enter your user name.</h>')
    res.write('<form action="/create-user" method="POST">');
    res.write('<input type="text" name="user" placeholder="Username">');
    res.write('<button type="submit">Submit</button>');
    res.write('</form>');
    // End tags
    res.write('</body>');
    res.write('</html>');
    return res.end();
});
router.post('/create-user', (req, res, next) => {
    console.log(req.body);
    res.redirect('/users');
});
const people = ['Fred', "Harry", "Jane", "Mary"];
router.get('/users', (req, res, next) => {
    //console.log('users');
    res.write('<html>');    
    res.write('<style>');
    res.write('body { background-color: #8e9aaf} h1 {padding: 1em; } li { padding-left: 2em;} ');
    res.write('</style>');
    res.write('<h1>Users</h1>');
    for (const person of people) {
        res.write(`<li>${person}</li>`);
    } 
    res.write('</body>');
    res.write('</html>'); 
    return res.end();  
});


module.exports = router;