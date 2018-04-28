var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.redirect('/website')
});

router.get('/:tab', (req, res, next) => {
    res.render('home/page_root.ejs', {
        title: 'JACK - BREW',
        tab: req.params.tab
    });
});


router.get('/:tab/:index', (req, res, next) => {
});

module.exports = router;
