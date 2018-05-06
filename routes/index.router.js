var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('home/page_root.ejs', {
        title: 'JACK - BREW',
    });
});


router.get('/:project', (req, res, next) => {
    res.render('detail/' + req.params.project + '/page_root.ejs', {
        title: 'JACK - BREW',
    });

});

module.exports = router;
