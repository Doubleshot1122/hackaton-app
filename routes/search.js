var express = require('express');
var router = express.Router();
var db = require('../db')
var search = require('../controllers/searchController');

/* search keywords */
//router.get('/', function(req, res, next) {
//    populate();
//    res.send('populating database');
//});

router.get('/keywords/insert', function(req, res, next) {
    search.generateKeywords();
    res.send('populating database');
});

router.get('/keywords/search', function(req, res, next) {
    var query = req.query['q'];
    db('keywords').select('keyword').where('keyword','LIKE', query+'%').then((response) => {
        var r = [];
        for(var i=0; i < response.length; i++) {
            r.push(response[i].keyword);
        }
        var results = {"keywords":r};
        res.send(JSON.stringify(results));
    });
});

module.exports = router;

