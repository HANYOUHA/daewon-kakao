var express = require('express');
var router = express.Router();

/* 처음 들어왔을 때 */
router.get('/', function(req, res, next) {
const menu = {
type: 'buttons',
buttons: ["오늘 급식좀."]
};
res.set({
'content-type': 'application/json'
}).send(JSON.stringify(menu));
});

module.exports = router;

