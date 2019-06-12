var express    = require("express");
var bodyParser = require('body-parser');

var regController = require('./controller/register');
// var logController = require('./controller/login');

var conn = require('./config/config');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var router = express.Router();

// test route
router.get('/', function(req, res) {
    res.json({ message: 'welcome to our upload module apis' });
});

//route to handle user registration
router.post('/register',regController.register);
// router.post('/login',controller.login);
app.use('/api', router);
app.listen(5000);
