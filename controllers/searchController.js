var Feed = require('rss-to-json');

function parseRSSfeed(url) {
    Feed.load(url, function(err, rss){
        console.log(rss);
    });
}

module.exports = {
    parseRSSfeed,
}
