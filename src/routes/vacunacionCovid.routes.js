const router = require('express').Router();
let { getVacunacionCovid19, getVacunacionCovid19ById, vacunarPaciente } = require('../controllers/vacunacionCovid19.controller');
const { body, validationResult } = require('express-validator');

router
/**
 * @api {get} /vacunacionCovid Solicitud de vacunación de Covid-19
 * @apiName GetVacunacionCovid19
 * @apiGroup VacunacionCovid19
 *
 * @apiSuccess {Number} VacunacionId Id de la vacunacion.
 * @apiSuccess {Number} PacienteId Id del paciente.
 * @apiSuccess {Number} VacunaId Id de la vacuna.
 * @apiSuccess {Number} DosisId Id de la dosis.
 * @apiSuccess {Date} FechaCreacion Fecha de registro
 * @apiSuccess {Date} FechaUltimaModificacion Fecha de la vacunación.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *	     {   
 *		    "VacunacionId": 1,
 *		    "PacienteId": 1,
 *		    "VacunaId": 2,
 *		    "DosisId": 1,
 *		    "FechaCreacion": "2022-02-23T00:00:00.000Z",
 *		    "FechaUltimaModificacion": "2022-02-23T00:00:00.000Z"
 *	      }
 *     ]
 *
 */
    .get('/', getVacunacionCovid19)

/**
 * @api {get} /vacunacionCovid/:VacunacionId Solicitud de vacunación de Covid-19 por id
 * @apiName GetVacunacionCovid19ById
 * @apiGroup VacunacionCovid19
 * 
 * @apiParam {Number} VacunacionId Id de la vacunacion.
 * 
 * @apiSuccess {Number} VacunacionId Id de la vacunacion.
 * @apiSuccess {Number} PacienteId Id del paciente.
 * @apiSuccess {Number} VacunaId Id de la vacuna.
 * @apiSuccess {Number} DosisId Id de la dosis.
 * @apiSuccess {Date} FechaCreacion Fecha de registro
 * @apiSuccess {Date} FechaUltimaModificacion Fecha de la vacunación.
 * 
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * {
 *    "VacunacionId": 1,
 *    "PacienteId": 1,
 *    "VacunaId": 2,
 *    "DosisId": 1,
 *    "FechaCreacion": "2022-02-23T00:00:00.000Z",
 *    "FechaUltimaModificacion": "2022-02-23T00:00:00.000Z"
 * }
 */

    .get('/:VacunacionId', getVacunacionCovid19ById)


/**
* @api {post} /vacunacionCovid/vacunarPaciente Guardado de vacunación de Covid-19
* @apiName VacunarPaciente
* @apiGroup VacunacionCovid19
*
* @apiParam {Number} PacienteId Id del paciente.
* @apiParam {Number} VacunaId Id de la vacuna.
* @apiParam {Number} DosisId Id de la dosis.
*
* @apiSuccess {String} Mensaje Mensaje de respuesta.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*	    "Mensaje": "Información de vacunación guardada con exito"
*     }
*/
    .post('/',[
        body('PacienteId').not().isEmpty().isInt().withMessage('El campo PacienteId es requerido'),
        body('VacunaId').not().isEmpty().isInt().withMessage('El campo VacunaId es requerido'),
        body('DosisId').not().isEmpty().isInt().withMessage('El campo DosisId es requerido')
    ], 
    async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(`${errors.array()[0].msg}`);
        }
        return next();
    }, vacunarPaciente)


module.exports = router;