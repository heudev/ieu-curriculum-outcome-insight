const path = require('path');

const express = require('express');

const formController = require('../controllers/form');

const courseController = require('../controllers/course');

const router = express.Router();

router.get('/api/forms', formController.getForms);

router.get('/api/form', formController.getForm);

router.post('/api/add-form', formController.createForm);

module.exports = router;
