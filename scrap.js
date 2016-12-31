var cheerio = require('cheerio')

getJqueryFromHtml = function(html,callback){
    var $ = cheerio.load(html,{
    // normalizeWhitespace: true,
    // xmlMode: true
});
    if($ != null) {
        // console.log(typeof $('body').find('div'))
        callback($);
    } else {
        console.log("head is null");
    }
}

module.exports = {
    getJqueryFromHtml:getJqueryFromHtml
}