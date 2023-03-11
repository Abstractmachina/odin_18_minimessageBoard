const express = require("express");
const router = express.Router();
const messages = require('../public/data/messages');

router.get('/', function(req, res, next) {
    res.render("form");
})

router.post("/", function(req, res, next) {
    console.log(req.body);
    console.log(new Date());

    messages.push({
        text: req.body.msg, 
        user: req.body.name, 
        added: new Date()
    });

    res.redirect('/');
})

module.exports = router;
