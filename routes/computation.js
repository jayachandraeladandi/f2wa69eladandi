var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  var random = Math.random() * 27;
  res.send(`Math.fround() applied to ${random} is ${Math.fround(random)}`);
});

router.get('/:id', function(req, res, next) {
  res.send(`Math.fround() applied to ${req.params.id} is ${Math.fround(req.params.id)}`);
});



module.exports = router;