var express    = require("express");
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var multer  = require('multer');
var cors = require('cors');

var regController = require('./controller/register');
var loginController = require('./controller/login');
var logoutController = require('./controller/logout');
var userController = require('./controller/user');
var coursesController = require('./controller/courses');
var subscriptionController = require('./controller/subscription');

var conn = require('./config/config');

var app = express();
var upload = multer();

//middleware to check login
var sessionChecker = (req, res, next) => {
    if (req.session.cookie && req.session.loggedin) {
        next();
    } else {
        res.json({
					status: false,
					message: "User not logged in"
				});
    }
};

app.use(cors({origin: [
  "http://localhost:8100"
], credentials: true}));

app.use(session({
  name: 'user_sid',
	secret: 'secret',
	resave: true,
	saveUninitialized: true,
  cookie: {
    path: '/',
    secure:false,
    expires: false
  }
}));

// initialize cookie-parser to allow us access the cookies stored in the browser.
app.use(cookieParser());

app.use(session({
  name: 'user_sid',
	secret: 'secret',
	resave: true,
	saveUninitialized: true,
  cookie: {
    path: '/',
    secure:false,
    expires: false
  }
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var api = express.Router();

// test route
api.get('/', sessionChecker, function(req, res) {

  res.json({
    status: true,
    message: "Welcome",
    userlevel: req.session.userlevel
  });

});

//route to handle user registration
api.post('/register', regController.register);
//route to handle user login
api.post('/login', upload.none(), loginController.login);
//route to handle user logout
api.get('/logout', logoutController.logout);
//route to handle user data
api.put('/user', sessionChecker, upload.none(), userController.user);
api.get('/user',sessionChecker, userController.userinfo);
//route to handle subscriptions
api.get('/subscription', sessionChecker, subscriptionController.subscription);
api.post('/subscription/:id', sessionChecker, subscriptionController.addsub);
api.delete('/subscription/:id', sessionChecker, subscriptionController.removesub);
api.get('/subscription/:id', sessionChecker, subscriptionController.getsubbyid);
//route to handle explore courses
api.post('/courses', sessionChecker, upload.none(), coursesController.addcourses);
api.get('/courses/:id', sessionChecker, coursesController.getcoursesbyid);
api.put('/courses/:id', sessionChecker, upload.none(), coursesController.updatecourse);
api.delete('/courses/:id', sessionChecker, coursesController.deletecourse);
api.get('/courses', sessionChecker, coursesController.getcourses);

app.use('/api', api);
app.listen(5000);
