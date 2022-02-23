const router = require('express').Router();
const { getDosis, getDosisById } = require('../controllers/dosis.controller');

/**
 * @api {get} /dosis Solicitud de dosis disponibles
 * @apiName GetDosis
 * @apiGroup Dosis
 *
 * @apiSuccess {Number} DosisVacunaId Id de la dosis.
 * @apiSuccess {String} Descripcion Descripcion de la dosis.
 * @apiSuccess {Bool} Estado Estado de la dosis.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *      {
 *      	"DosisVacunaId": 1,
 *      	"Descripcion": "1era Dosis",
 *      	"Estado": true
 *       }
 *     ]
 *
 */

router
    .get('/', getDosis)


/**
 * @api {get} /dosis/:DosisVacunaId Solicitud de dosis por Id
 * @apiName GetDosisById
 * @apiGroup Dosis
 * 
 * @apiParam {Number} DosisVacunaId Id de la dosis.
 * 
 * @apiSuccess {Number} DosisVacunaId Id de la dosis.
 * @apiSuccess {String} Descripcion Descripcion de la dosis.
 * @apiSuccess {Bool} Estado Estado de la dosis.
 * 
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *   {
 *  	"DosisVacunaId": 1,
 *      "Descripcion": "1era Dosis",
 *      "Estado": true
 *   }
 */
    .get('/:DosisVacunaId', getDosisById)


module.exports = router;