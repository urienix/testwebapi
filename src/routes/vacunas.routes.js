const router = require('express').Router();
const { getVacunas } = require('../controllers/vacunas.controller')

router
    .get('/', getVacunas)

module.exports = router;