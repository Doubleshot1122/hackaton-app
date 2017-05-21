var Feed = require('rss-to-json');
var MetaInspector = require('node-metainspector');
var db = require('../db');

var rssItems = [];

function cleanString(id) {
    id = id.toUpperCase();
    id = id.replace( /\t/ , "");
    id = id.replace( /\n/ , "");
    id = id.replace( /\r/ , "");
    id = id.replace( /\b/ , "");
    id = id.replace( /\f/ , "");
    return id.replace( /[^a-zA-Z0-9]/ , "").toLocaleLowerCase();
}

function generateKeywords() {

    return db('articles').select('keywords')
            .then((response) => {
                for(var i=0; i < response.length; i++) {
                    items = response[i].keywords;
                    for(var j=0; j < items.length; j++) {
                        item = cleanString(items[j]);
                        db('keywords').insert({"keyword":item}).catch(function(err) {
                            //console.log(err.stack);
                        });
                    }
                }
            }
    );
}

function parseRSSitem(value) {
    var url = value.url;
    var client = new MetaInspector(url, { timeout: 5000 });
    var r = {};
    r["title"] = value.title;
    r["description"] = value.description;
    r["keywords"] = [];
    r["png"] = null;

    client.on("fetch", function(){
        keys = client.keywords;

        // parse each keyword as a word if it turns out to be a sentence
        for (var i = 0; i < keys.length; i++) {
            text = keys[i];
            token = text.split(" ");
            for (var j = 0; j < token.length; j++) {
                word = cleanString(token[j]);
                if (r["keywords"].indexOf(word) < 0 && word.length > 3) {
                    r["keywords"].push(word);
                }
            }
        }

        r["png"] = client.image;
        r["link"] = url;
        if(r["keywords"].length > 1) {
            r["keywords"] = JSON.stringify(r["keywords"]);
            //console.log(r);
            return db('articles').select('id').where('link',url)
                .then((response) => {
                    if(response.length === 0){
                        return db('articles').insert(r);
                    }
                }
            );
        }
    });

    client.fetch();
}

function parseRSSfeed(url) {
    Feed.load(url, function(err, rss){
        var items = rss.items;
        for(var i=0; i < items.length; i++) {
            item = items[i];
            parseRSSitem(item);
        }
    });
}

module.exports = {
    parseRSSfeed,
    generateKeywords
}
