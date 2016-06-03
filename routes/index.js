var express = require('express');
var router = express.Router();
var information = require('../data')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: information.title });
});

router.get('/meme', function(req, res) {
  res.render('meme', {
    image: information.images[0],
    steps: information.firstSteps,
    title: 'First Steps',
    back: '/',
    next: '/meme/keep-going'
  })
})

router.get('/meme/keep-going', function(req, res) {
  res.render('meme', {
    image: information.images[1],
    steps: information.secondSteps,
    title: 'Second Steps',
    back: '/meme',
    next: '/meme/keep-going/almost-there',
  })
})

router.get('/meme/keep-going/almost-there', function(req, res) {
  res.render('meme', {
    image: information.images[2],
    steps: information.finalSteps,
    title: 'Final Steps',
    back: '/meme/keep-going',
    next: '/'
  })
})

module.exports = router;
