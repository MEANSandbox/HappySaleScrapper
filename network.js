var request = require('request');

var networkResponse = function(err,response,body) {
    console.log(err);
}
getHtmlFromURL = function (URL,callback) {
    request(URL,function(err,response,html) {
        if(err == null && response.statusCode == 200) {
            callback(html);
        } else {
            callback(null);
        }
})
}


module.exports = {
    getHtmlFromURL:getHtmlFromURL,
}