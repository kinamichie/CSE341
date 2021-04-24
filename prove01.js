const path = require('path');
const express = require('express'); 
const bodyParser = require('body-parser');


const app = express();

app.set('view engine', 'ejs');

const userRoute = require('./routes/prove01-routes');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(userRoute);

app.listen(3000);