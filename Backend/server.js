var express    = require("express");
var bodyParser = require('body-parser');
const session = require('express-session');
var multer  = require('multer');

var regController = require('./controller/register');
var logController = require('./controller/login');
var userController = require('./controller/user');
var coursesController = require('./controller/courses');
var subscriptionController = require('./controller/subscription');

var conn = require('./config/config');

var app = express();
var upload = multer();

//middleware to check login
var sessionChecker = (req, res, next) => {
    if (req.session.loggedin) {
        next();
    } else {
        res.json({
					status: false,
					message: "User not logged in"
				});
    }
};

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
api.post('/login', upload.none(), logController.login);
//route to handle user data
api.put('/user', sessionChecker, upload.none(), userController.user);
//route to handle subscriptions
api.get('/subscription', sessionChecker, subscriptionController.subscription);
api.post('/subscription/:id', sessionChecker, subscriptionController.addsub);
api.delete('/subscription/:id', sessionChecker, subscriptionController.removesub);


app.use('/api', api);
app.listen(5000);
