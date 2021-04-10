const os = require('os');
const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();

app.get("/",function(req,res){
    res.send('hello world')
    fs.Dirent
});

app.get("/about",function(req,res){
    res.send('welcome to page')
});

app.get("/service",function(req,res){
    res.json({
        message:"hello",
        status:"success"
    })
});
 
app.listen(8080,function(){
    console.log("web server is running");
});