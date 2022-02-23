const router = require('express').Router();
const { version } = require('../../package.json');

const dosisRoutes = require('./dosis.routes');
const pacientesRoutes = require('./pacientes.routes');
const vacunasRoutes = require('./vacunas.routes');
const vacunacionCovidRoutes = require('./vacunacionCovid.routes');

router.get('/', (req, res) => {
    res.send(`Test Web API v${version}`);
});

router.use('/dosis', dosisRoutes);
router.use('/pacientes', pacientesRoutes);
router.use('/vacunas', vacunasRoutes);
router.use('/vacunacionCovid', vacunacionCovidRoutes);

module.exports = router;