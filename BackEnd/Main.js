const express       = require('express');
const app           = express();
const path          = require('path');
const mysql         = require('mysql');
const session       = require('express-session');
const MySQLStore    = require('express-mysql-session')(session)
const Router        = require('./Router.js')
const morgan        = require('morgan');

app.use(morgan('short'));

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());

console.log('Testing Server')

//Database
const db = mysql.createConnection({ 
    host:'127.0.0.1',
    user:'root',
    database:'smarthome'
});

db.connect(function(err) {
    if(err){
        console.log("MySQL ERROR");
        throw err;
        return false;
    }else{
        console.log("MySQL Connected!")
    }
});

const sessionStore = new MySQLStore({
    expiration: (1825*86400*1000),
    encConnectionOnClose: false
}, db);

app.use(session({
    key: 'r32sdf436tdtg546ertgdgdfg',
    secret: '23exdv54zdgfdg54zertdg8izui',
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: (1825*86400*1000),
        httpOnly: false
    }
}));

new Router(app, db);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(3000);