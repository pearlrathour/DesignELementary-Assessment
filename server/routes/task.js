const express = require('express');
const router = express.Router();
const tasks = require('../controllers/task');
const task = require('../models/task');

router.route('/add')
    .post(tasks.add);

router.route('/del')
    .post(tasks.delete);

router.route('/edit')
    .post(tasks.edit);

router.route('/enable')
    .post(tasks.enable);

router.route('/fetchreminders')
    .post(tasks.fetchreminders);

router.route('/fetchreminder')
    .post(tasks.fetchreminder);

module.exports = router;