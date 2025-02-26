const path = require('path');

const express = require('express');

const formController = require('../controllers/form');

const router = express.Router();


router.get('/api/forms', formController.getForms);

/*
router.post(
);
*/


module.exports = router;
