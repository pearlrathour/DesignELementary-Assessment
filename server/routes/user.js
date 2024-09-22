const express = require('express');
const router = express.Router();
const passport = require('passport');
const users = require('../controllers/user');
const user = require('../models/user');

router.route('/signup')
    .post(users.signup);

router.route('/signin')
    .post(users.signin);

router.route('/signout')
    .post(users.signout);

module.exports = router;