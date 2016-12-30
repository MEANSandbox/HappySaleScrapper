var express = require('express')
var app = express();
var cheerio = require('cheerio')
var async = require('async')
var request = require('request');
var constant = require('./constant')
app.set('port',3000);



app.listen(app.get('port'),function(){
    console.log('server is runniing at port ',app.get('port'))
    console.log(constant.TWITTER_SECRET);
})