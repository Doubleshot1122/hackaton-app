var Feed = require('rss-to-json');
var MetaInspector = require('node-metainspector');

var rssItems = [];

function parseRSSitem(value) {
    var url = value.url;
    var client = new MetaInspector(url, { timeout: 5000 });
    var r = {};
    r["title"] = value.title;
    r["description"] = value.description;
    r["keywords"] = [];
    r["image"] = null;

    client.on("fetch", function(){
        keys = client.keywords;

        // parse each keyword as a word if it turns out to be a sentence
        for (var i = 0; i < keys.length; i++) {
            text = keys[i];
            token = text.split(" ");
            for (var j = 0; j < token.length; j++) {
                word = token[j];
                if (r["keywords"].indexOf(word) < 0 && word.length > 3) {
                    r["keywords"].push(word);
                }
            }
        }

        r["image"] = client.image;
        console.log(r);
        rssItems.push(r);
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
    console.log(rssItems);
}

module.exports = {
    parseRSSfeed,
}
