var express = require('express');
var router = express.Router();
const Admin = require('../models/admin');
const News = require('../models/news');


/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/news', function (req, res, next) {
    News.find({}, (err, newsData) => {

        if (!err) {
            res.send(newsData);
        }
        else {
            res.json(err);
        }

    });
});

router.get('/admin', function (req, res, next) {
    Admin.find({}, (err, adminData) => {

        if (!err) {
            res.send(adminData);
        }
        else {
            res.json(err);
        }

    });
});



router.post('/admin', function (req, res, next) {
    const adminDao = new Admin(req.body);
    adminDao.save((err, data) => {
        //save
        if (!err) {
            const status = {
                msg: 'Admin Added Successfully'
            }
            console.log("Admin has been saved");
            res.json(status)

        }
        else {
            res.json(err)

        }
    });

});


router.post('/news', function (req, res, next) {
    const newsDao = new News(req.body);
    newsDao.save((err, data) => {
        //save
        if (!err) {
            const status = {
                msg: 'News Added Successfully'
            }
            console.log("News has been saved");
            res.json(status)

        }
        else {
            res.json(err)

        }
    });

});



module.exports = router;
