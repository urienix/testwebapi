const router = require('express').Router();
const { getPacientes, getPaciente, guardarPaciente} = require('../controllers/pacientes.controller');

router
    .get('/', getPacientes)

    .get('/:PacienteId', getPaciente)

    .post('/', guardarPaciente)


module.exports = router;