var http = require('http');
var mysql = require('mysql');
var ejs = require('ejs');
var fs=require('fs');
var express = require('express');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'apicall'
});
 var res=express();

console.log('MySQL Connection details  '+connection);

http.createServer(function (request, response) {       

    fs.readFile('DataDisplay.ejs', 'utf-8', function(err, content) {
   

        console.log('Creating the http server');
        connection.query('SELECT * FROM apicall ', function(err, rows, fields){   

            // do some error handling here  <<<<
        	var tableData="";
        	rows.forEach(row => { 
        		  console.log(row.tableId); 
        		  console.log(row.Id); 
        		  console.log(row.LinkName); 
        		  console.log(row.LinkUrl); 
        		  console.log(row.Location); 
        		  console.log(row.Category); 
        		}); 
        	
             response.writeHead(200, { 'Content-Type': 'text/html '});
                  //    rows = JSON.stringify(rows); 
                     
                      var renderedHtml = ejs.render(content, {rows:rows});
                         response.end(renderedHtml);

              
     }); 

});

}).listen(8089);