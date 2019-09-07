const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('registro');
});
router.get('/registro', function(req, res) {
  res.render('registro');
});
router.get('/login', function(req, res) {
  res.render('login');
});
router.get('/email', function(req, res) {
  res.render('email');
});

module.exports = router;
