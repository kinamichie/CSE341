const path = require('path');

const express = require('express');

const router = express.Router();


router.get('/', (req, res, next) => {
    console.log('test');
    res.send('<h1>Hello! Please enter your user name.</h><form action="/create-user" method="post"><input type="text" name="user" placeholder="Username"><button type="submit">Submit Name</button></form>');
    
});
router.post('/create-user', (req, res, next) => {
    console.log(req.body);
    res.redirect('/users');
});
const people = ['Fred', "Harry", "Jane", "Mary"];
router.get('/users', (req, res, next) => {
    console.log('users');
    res.write('<h1>Users</h1>');
    for (const person of people) {
        res.write(`<li>${person}</li>`);
    }  
    return res.end();  
});


module.exports = router;