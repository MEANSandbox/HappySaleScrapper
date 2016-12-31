var express = require('express')
var app = express();
var constant = require('./constant')
var network = require('./network')
var scrap = require('./scrap')
var parse = require('./parse.js')
app.set('port',3000);
app.use('/public',express.static(__dirname+'/public'))
app.use('/bower_components',express.static(__dirname+'/bower_components'))
//---------------API ENDPOINT------------------------------------------------
app.get('/',function(req,res){
    res.sendFile('index.html',{root:__dirname+'/public'})
})

app.get('/test',function(req,res){
    res.json({"name":"rishabh","class":"test"});
})
getFlipkartData(constant.URL_FLIPKART,flipkartDataResponse);
    function getFlipkartData(URL,callback) {
        network.getHtmlFromURL(constant.URL_FLIPKART,function(html){
            validateResponse(html,function(html){
                scrap.getJqueryFromHtml(html,function($){
                    parse.getRootFromJquery($,function(actualRoot){
                        var Root = [];
                        parse.parseRoot(Root,actualRoot,function(jsonRoot){
                            console.log(jsonRoot);
                        })
                    })
                })
            })
        })
    }

app.get('/flipkart',function(req,res){
        network.getHtmlFromURL(constant.URL_FLIPKART,function(html){
            validateResponse(html,function(html){
                scrap.getJqueryFromHtml(html,function($){
                    parse.getRootFromJquery($,function(actualRoot){
                        var Root = [];
                        parse.parseRoot(Root,actualRoot,function(jsonRoot){
                            console.log(jsonRoot);
                            res.json(jsonRoot)
                        })
                    })
                })
            })
        })
})
//---------------------------------------------------------------------------
var flipkartDataResponse = function (head) {
    console.log(head);
}
var validateResponse = function(html,callback) {
    if(html != null) {
        callback(html)
    } else {
        console.log("getHtmlFromURL method return null")
    }
}
var jqueryHead = function($) {
    parse.getRootFromJquery($,function(rootModel){
        console.log(rootModel)
    })

}

app.listen(app.get('port'),function(){
    console.log('server is runniing at port ',app.get('port'))
    // console.log(constant.TWITTER_SECRET);
})