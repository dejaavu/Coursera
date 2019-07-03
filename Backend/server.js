var express    = require("express");
var bodyParser = require('body-parser');
const session = require('express-session');

var regController = require('./controller/register');
var logController = require('./controller/login');
var userController = require('./controller/user');
var exploreController = require('./controller/explore');

var conn = require('./config/config');

var app = express();
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
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
api.post('/login', logController.login);
//route to handle user data
//api.post('/user', userController.user);
//route to handle explore subscriptions
//api.post('/explore', exploreController.explore);

app.use('/api', api);
app.listen(5000);
