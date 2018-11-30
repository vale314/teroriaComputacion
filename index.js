var express = require('express');
var path = require('path');


var app = express();



app.use(express.static(path.join(__dirname, './dist/web')));

app.get('/',(req,res)=>{
  
    res.sendFile(path.join(__dirname,'./dist/web/index.html'));
})
app.get('*',(req,res)=>{
  
    res.redirect('/');
})

app.listen(800,'192.168.1.76' ,()=>{
    console.log("Server Is Running");
})

module.exports = app;