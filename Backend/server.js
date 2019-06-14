var express    = require("express");
var bodyParser = require('body-parser');

var regController = require('./controller/register');
var logController = require('./controller/login');

var conn = require('./config/config');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "authorization, access-control-allow-headers, Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var api = express.Router();

// test route
api.get('/', function(req, res) {
    res.json({
      message: 'welcome to our apis',
      apis: 'register'
    });
});

//route to handle user registration
api.post('/register', regController.register);
//route to handle user login
api.post('/login',logController.login);

app.use('/api', api);
app.listen(5000);
