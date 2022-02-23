const router = require('express').Router();
const { getPacientes, getPaciente, guardarPaciente} = require('../controllers/pacientes.controller');

router
/**
 * @api {get} /pacientes/ Obtener todos los pacientes
 * @apiName GetPacientes
 * @apiGroup Pacientes
 * 
 * @apiSuccess {Number} PacienteId Id del paciente.
 * @apiSuccess {String} Nombres Nombres del paciente.
 * @apiSuccess {String} Apellidos Apellidos del paciente.
 * @apiSuccess {String} Sexo Sexo del paciente.
 * @apiSuccess {String} FechaNacimiento Fecha de nacimiento del paciente.
 * @apiSuccess {INT} Edad Edad del paciente.
 * @apiSuccess {String} TipoEdad Tipo edad.
 * 
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *   [
 *      {
 *		"PacienteId": 1,
 *		"Expediente": "0801199012345",
 *		"Nombres": "Yadier Benjamín",
 *		"Apellidos": "Molina Luciano",
 *		"Sexo": "M",
 *		"Fecha_Nacimiento": "1982-07-13T00:00:00.000Z",
 *		"Edad": 39,
 *		"TipoEdad": "Años"
 *	    }
 *   ]
 * 
*/
    .get('/', getPacientes)

/**
 * @api {get} /pacientes/:id Obtener paciente por id
 * @apiName GetPaciente
 * @apiGroup Pacientes
 * 
 * @apiSuccess {Number} PacienteId Id del paciente.
 * @apiSuccess {String} Nombres Nombres del paciente.
 * @apiSuccess {String} Apellidos Apellidos del paciente.
 * @apiSuccess {String} Sexo Sexo del paciente.
 * @apiSuccess {String} FechaNacimiento Fecha de nacimiento
 * 
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *		"PacienteId": 1,
 *		"Expediente": "0801199012345",
 *		"Nombres": "Yadier Benjamín",
 *		"Apellidos": "Molina Luciano",
 *		"Sexo": "M",
 *		"Fecha_Nacimiento": "1982-07-13T00:00:00.000Z",
 *		"Edad": 39,
 *		"TipoEdad": "Años"
 *	 }
 * 
 */

    .get('/:PacienteId', getPaciente)

/**
 *   @api {post} /pacientes/ Guardar paciente
 * @apiName guardarPaciente
 * @apiGroup Pacientes
 * 
 * @apiParam {String} Expediente Número de expediente.
 * @apiParam {String} Nombres Nombres del paciente.
 * @apiParam {String} Apellidos Apellidos del paciente.
 * @apiParam {String} Sexo Sexo del paciente.
 * @apiParam {Date} Fecha_Nacimiento Fecha de nacimiento.
 * @apiParam {Number} Edad Edad del paciente.
 *  * @apiParam {String} TipoEdad Tipo edad.
 * 
 * @apiExample {json} Request-Example:
 *     {
 *        "Expediente": "0512199802576",
 *        "Nombres": "Tony Joel", 
 *        "Apellidos": "Bodque Uribe", 
 *        "Sexo": "M", 
 *        "Fecha_Nacimiento": "06-28-1998", 
 *        "Edad": "22", 
 *        "TipoEdad": "Años"
 *    }
 * 
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 * {
 * "Información de paciente guardada con exito"
 * }
 */

    .post('/', guardarPaciente)


module.exports = router;