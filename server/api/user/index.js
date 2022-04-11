const express = require('express');
const router = express.Router();
const createUser = require('./controllers/createUser');

router.route('/create').post(createUser);

module.exports = router;
