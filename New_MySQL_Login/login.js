var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var nodemailer = require('nodemailer');
var handlebars = require('handlebars');
var fs = require('fs');
var favicon = require('serve-favicon');
const SMTPConnection = require('nodemailer/lib/smtp-connection');

var transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    auth: {
        user: 'cadd.enterprises@outlook.com',
        pass: 'Sciencerocks00!'
    }
});

var readHTMLFile = function(path, callback) {
    fs.readFile(path, {encoding: 'utf-8'}, function(error, html) {
        if(error) {
            throw error;
            callback(error);
        } else {
            callback(null, html);
        }
    });
};

var authenticationNumber;

var verified = false;

var connection = mysql.createConnection({
    host: '73.128.219.99',
    port: '3306',
    user: 'root',
    password: 'Sciencerocks00!',
    database: 'nodelogin'
});

var app = express();

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(favicon(path.join(__dirname + '/assets/favicon.ico')));

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname + '/html/login.html'));
});

app.post('/auth', function(request, response) {
    var username = request.body.username;
    var password = request.body.password;
    if(username && password) {
        connection.query('SELECT * FROM accounts WHERE username = ? AND password = ? AND verify = 1', [username, password], function(error, results, fields) {
            if(results.length != 0) {
                request.session.loggedin = true;
                response.redirect('/home');
            } else {
                response.send('Incorrect Username and/or Password!');
            }
            response.end();
        });
    } else {
        response.send('Please enter Username and Password!');
        response.end();
    }
});

app.get('/newUser', function(request, response) {
    response.sendFile(path.join(__dirname + '/html/newUser.html'));
});

app.post('/newUserInput', function(request, response) {
    var firstName = request.body.firstName;
    var age = request.body.age;
    var email = request.body.email;
    var username = request.body.username;
    var password = request.body.password;
    verified = true;
    authenticationNumber = Math.floor(Math.random() * (999999 - 100000)) + 100000;
    connection.query('SELECT * FROM accounts WEHERE email = ?', [email], function(error, results, fields) {
        if(results.length != 0) {
            response.send('That email address has already been taken! Please choose another email!');
        } else {
            connection.query('INSERT INTO accounts VALUES (?, ?, ?, ?, ?, ?, ?)', [firstName, age, email, username, password, authenticationNumber, verified]);
            readHTMLFile(__dirname + '/email.html', function(error, html) {
                var template = handlebars.compile(html);
                var replacements = {
                    username: firstName,
                    verifyCode: authenticationNumber
                };
                var htmlToSend = template(replacements);
                var mailOptions = {
                    from: host,
                    to: String(email),
                    subject: 'Please Verify Your Account!',
                    html: htmlToSend
                };
                transporter.sendMail(mailOptions, function(error, info) {
                    if(error) {
                        console.log(error);
                    } else {
                        console.log(info.response);
                    }
                });
            });
            response.redirect('/send');
        }
    });
});

app.get('/backButton', function(request, response) {
    response.redirect('/');
});

app.post('/verify', function(request, response) {
    var email = request.body.email;
    var verify = request.body.verify;
    connection.query('SELECT * FROM accounts WHERE email = ? AND authentication = ?', [email, verify], function(error, results, fields) {
        if(results.length != 0) {
            verified = true;
            connection.query('UPDATE accounts SET verify = ? WHERE email = ?', [verified, email]);
            response.redirect('/');
        } else {
            response.redirect('/send');
        }
    });
});

app.get('/send', function(request, response) {
    response.sendFile(path.join(__dirname + '/html/verify.html'));
});

app.get('/home', function(request, response) {
    response.sendFile(path.join(__dirname + '/html/access.html'));
});

app.get('/chicken', function(request, response) {
    response.sendFile(path.join(__dirname + '/assets/chicken.jpg'));
});

app.listen(8080);
