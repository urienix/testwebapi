const pool = require('../config/connection');

module.exports = {
    getDosis: async (req, res) => {
        try {
            let dosis = (await pool.exec('SP_OBTENER_TODOS_DOSIS')).recordset;
            return res.status(200).json(dosis);
        } catch (error) {
            return res.status(500).json('Ha ocurrido un error');
        }
    },

    getDosisById: async (req, res) => {
        try {
            let { DosisVacunaId } = req.params;
            let dosis = (await pool.exec('SP_OBTENER_DOSIS', { DosisVacunaId })).recordset[0];
            if (!dosis) dosis = 'Información de vacunación no disponible';
            return res.status(200).json(dosis);
        } catch (error) {
            return res.status(500).json('Ha ocurrido un error');
        }
    }
}