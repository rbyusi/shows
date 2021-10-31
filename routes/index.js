const express = require('express');
const router = express.Router();
const showsController = require('../controllers/shows-controller');
const validateSchema = require('..//middleware/validateSchema');
const showsSchema = require('../schema/shows');

router.post('/', validateSchema(showsSchema),showsController.filterShows);

module.exports = router;