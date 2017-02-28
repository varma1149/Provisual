var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
  host  : 'localhost',
  user  : 'root',
  password  : 'password',
  database  : 'Plant'
});

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");    
} else {
    console.log("Error connecting database ... nn");    
}
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
  res.render('index');
});

router.get('/plant', function(req, res, next) {
  res.render('plant');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.get('/admin', function(req, res, next) {
  connection.query('SELECT * from Layouts', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
});
res.render('admin');
connection.end();
  

});
router.get('/login', function(req, res, next) {
  
  res.render('login');
});

module.exports = router;
