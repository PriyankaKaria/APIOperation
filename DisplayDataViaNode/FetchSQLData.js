var http = require('http');
var mysql = require('mysql');
var ejs = require('ejs');
var fs=require('fs');
var express = require('express');
//initialised dependencies
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'apicall'
});
 var res=express();
// create server
console.log('MySQL Connection details  '+connection);

http.createServer(function (request, response) {       

    fs.readFile('DataDisplay.ejs', 'utf-8', function(err, content) { // read ejs template
        console.log('Creating the http server');
        connection.query('SELECT * FROM apicall ', function(err, rows, fields){   
        	var tableData=""; //Fetch Data 
        	rows.forEach(row => { 
        		  console.log(row.tableId); 
        		  console.log(row.Id); 
        		  console.log(row.LinkName); 
        		  console.log(row.LinkUrl); 
        		  console.log(row.Location); 
        		  console.log(row.Category);  // log data to console for Debug and verification
        		}); 
             response.writeHead(200, { 'Content-Type': 'text/html '});
                     
                      var renderedHtml = ejs.render(content, {rows:rows});
                         response.end(renderedHtml); // Create a response.

              
     }); 

});

}).listen(8089);
