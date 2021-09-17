// const path = require('path');

// const fs = require('fs');

// const express = require('express');

// const router = express.Router();

// router.get('/', (req, res, next) => {
//     //console.log('test');    
//     res.write('<html>');    
//     res.write('<style>');
//     res.write('body { background-color: #0065BD} h1 {padding: 2em; margin-bottom: 2em; color: white; text-align: center;} button:hover {color: white; background-color:black;}');
//     res.write('</style>');
//     res.write('<body>');
//     res.write('<h1>Hello! Please enter your user name.</h>')
//     res.write('<form action="/create-user" method="POST">');
//     res.write('<input type="text" name="user" placeholder="Username">');
//     res.write('<button type="submit">Submit</button>');
//     res.write('</form>');
//     // End tags
//     res.write('</body>');
//     res.write('</html>');
//     return res.end();
// });
// router.post('/create-user', (req, res, next) => {
//     console.log(req.body);
//     res.redirect('/users');
//     const body = [];
//     req.on('data', chunk => {
//         body.push(chunk);
                    
//     });
//     req.on('end', () => {
//         const parsedBody = Buffer.concat(body).toString();
//         const message = parsedBody.split('=')[1]; 
//         console.log(message);
//         fs.writeFile('users.txt', message, err => {
//             res.statusCode = 302;
//              res.writeHead('Location', '/users');             
//             return res.end();   
//         });
    
//     }); 
//     }); 
    

// const people = ['Fred', "Harry", "Jane", "Mary"];
// router.get('/users', (req, res, next) => {
//     //console.log('users');
//     res.write('<html>');    
//     res.write('<style>');
//     res.write('body { background-color: #8e9aaf} h1 {padding: 1em; } li { padding-left: 2em;} ');
//     res.write('</style>');
//     res.write('<h1>Users</h1>');
//     res.write('<ul>')
//     for (const person of people) {
//         res.write(`<li>${person}</li>`);
//     }
//     res.write('</ul>');
//     res.write('</body>');
//     res.write('</html>'); 
//     return res.end();  
// });

// module.exports = router;
const fs = require('fs');

const userInfo = (req, res) => {
const url = req.url;
const method = req.method;
if (url === '/') {
  res.write('<html>');
  res.write('<head><title>Enter Users</title><head>');
  res.write('<body><h1>Please Enter Your User Name</h1><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>');
  res.write('</html>');
  return res.end();
}
if(url === '/users'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Users</title><head>');
    res.write('<body><h1>Users</h1><ul><li>Nathan</li><li>Kerry</li><li>');
    var name = fs.readFileSync('./username.txt');
    res.write(name);  
    res.write('</ul></body>');
    res.write('</html>');
    res.end();

}
if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody.split('=')[1]); 
      const username = parsedBody.split('=')[1];
      fs.writeFileSync('username.txt', username, err => {
        res.statusCode = 302;
        res.setHeader('Location', '/users');
        return res.end();
      });
    });
    res.statusCode = 302;
    res.setHeader('Location', '/users');
    res.end();
  }

};

module.exports = userInfo;

