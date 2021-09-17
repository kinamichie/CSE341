
const fs = require('fs');

const userInfo = (req, res) => {
const url = req.url;
const method = req.method;
if (url === '/') {
  res.write('<html>');
  res.write('<head><title>Enter Users</title><head>');
  res.write('<style>');
  res.write('body { background-color: #0065BD;} h1 {padding: 1em; margin-bottom: 1em; text-align: center; color: white;} button:hover {color: white; background-color:black;} input{margin-left: 43%};');
  res.write('</style>');
  res.write('<body><h1>Please Enter Your User Name</h1><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>');
  res.write('</html>');
  return res.end();
}
if(url === '/users'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Users</title><head>');
    res.write('<style>');
    res.write('body { background-color: #0065BD;} h1 {padding: 1em; margin-bottom: 1em; color: white;} ul{color: white;}');
    res.write('</style>');
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

