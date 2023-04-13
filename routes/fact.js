const express = require('express');

const router = express.Router();
const fact = require('../controller/facts')
router.get("/facts",fact);

module.exports = router;