const router = require('express').Router();
const { getVacunas, getVacuna } = require('../controllers/vacunas.controller')


router
/**
 * @api {get} /vacunas/ Obtener todas las vacunas
 * @apiName GetVacunas
 * @apiGroup Vacunas
 * 
 * @apiSuccess {Number} VacunacionId Id de la vacuna.
 * @apiSuccess {String} Descripcion Descripcion de la vacuna.
 * @apiSuccess {Bool} Estado Estado de la vacuna.
 * 
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *  [
 *     {
 *      "VacunacionId": 1,
 *      "Descripcion": "Vacuna de la vacuna",
 *      "Estado": true
 *      }
 *  ]
 * 
 * 
*/
    .get('/', getVacunas)

/**
 * @api {get} /vacunas/:VacunacionId Obtener vacuna por id
 * @apiName GetVacuna
 * @apiGroup Vacunas
 * 
 * @apiParam {Number} VacunacionId Id de la vacuna.
 * 
 * @apiSuccess {Number} VacunacionId Id de la vacuna.
 * @apiSuccess {String} Descripcion Descripcion de la vacuna.
 * @apiSuccess {Bool} Estado Estado de la vacuna.
 * 
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 * {
 *     "VacunacionId": 1,
 *     "Descripcion": "Vacuna de la vacuna",
 *     "Estado": true
 * }
 */

    .get('/:VacunacionId', getVacuna)

module.exports = router;