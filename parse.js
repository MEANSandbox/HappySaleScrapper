var async = require('async')

isRoot = function($,callback) {
    if($._root !== null && $._root.name == "root" && $._root.type == "root") {
        callback($._root);
    } else {
        console.log("jquery root is null");
    }

}

getParsedRoot = function(root,callback) {
    if(root.children !== null){
        //traverse root child and get the actual html and head parent
        // root.find(".hs-mer-tabs")
        callback(root.children);
    } else {
        console.log("jquery root does not have children")
        callback(null);
    }
}
getRootFromJquery = function($,callback) {
    isRoot($,function(root){
        if(root !== null) {
            getParsedRoot(root,function(parsedRoot){
                if(parsedRoot !== null) {
                    callback(parsedRoot);
                } else {
                    callback(null);
                }
            })
        } else {
            console.log("jquery root is null");
        }
    })
}
var Root = [];
p = function(log) {
    console.log(log);
}
getValue = function(node,item,callback) {
    if(item.type !== null && item.type !== undefined && typeof item.type !== 'object') {
        node.type = item.type;
    }
    if(item.data !== null && item.data !== undefined && item.data !== "\n" && typeof item.data !== 'object') {
        if(item.data == 'Myntra') {
            console.log(item)
        }
        node.data = item.data;
    }
    if(item.attribs !== null && item.attribs !== undefined ) {
        node.attribs = item.attribs;
        console.log(item.attribs)
    }
    if(item.name !== null && item.name !== undefined && typeof item.name !== 'object') {
        node.name = item.name;
    }
    if(item.children !== null ) {
        node.children = [];
        this.parseRoot(node.children,item.children,function(response){
            console.log(response);
            callback(node);
        })
    } else {
        callback(node);
    }
}

parseRoot = function(jsonRoot, jqueryRoot,callback) {
    if(jqueryRoot != null && jqueryRoot instanceof Array ) {
        jqueryRoot.forEach(function(item,index){
            if(item !== null ) {
                var node = {};
                getValue(node,item,function(node){
                    jsonRoot.push(node);
                    if(index == jqueryRoot.length-1) {
                        callback(jsonRoot);
                    }
                })
            } else {
                callback(jsonRoot)
            }                
        })//end of fo loop
    } else {
        console.log("unable to parse root to json object");
        callback(jsonRoot)
    }
}

// parseRoot = function(jsonRoot, jqueryRoot,callback) {
//     if(jqueryRoot != null) {
//         jqueryRoot.forEach(function(item,index){
//             if(item !== null ) {
//                 var node = {};
//                 getValue(node,item,function(node){
//                     console.log(node);
//                     jsonRoot.push(node);
//                 })
//             }
//         })
//     } else {
//         console.log("unable to parse root to json object")
//     }
// }
module.exports = {
    getRootFromJquery:getRootFromJquery,
    parseRoot:parseRoot,
}