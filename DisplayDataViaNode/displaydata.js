var mysql = require('mysql');
var express = require('express');
var app = express();


var con = mysql.createConnection({
	  host: "localhost",
	  user: "root",
	  password: "",
	  database: "apicall"
	});



	
	  app.set ('view engine', 'coffee');
	 
con.connect(function(err) {
	  con.query("SELECT * FROM apicall", function (err, result, fields) {
	    console.log(result);
	  });
	});


app.listen(3000);