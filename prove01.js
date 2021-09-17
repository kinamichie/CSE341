// const path = require('path');
// const express = require('express'); 
// const bodyParser = require('body-parser');


// const app = express();

// app.set('view engine', 'ejs');

// const userRoute = require('./prove01-routes');

// app.use(bodyParser.urlencoded({extended:true}));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(userRoute);

// app.listen(4000);
const http = require('http');

const routes = require('./prove01-routes');

const server = http.createServer(routes);

server.listen(3000);