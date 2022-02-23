const pool = require('../config/connection');

module.exports = {
    getVacunas: async (req, res) => {
        try {
            let vacunas = (await pool.exec('SP_OBTENER_TODOS_VACUNAS')).recordset;
            return res.status(200).json(vacunas);
        } catch (error) {
            return res.status(500).json('Ha ocurrido un error');
        }
    },

    getVacuna: async (req, res) => {
        try {
            let { VacunacionId } = req.params;
            let vacuna = (await pool.exec('SP_OBTENER_VACUNA', { VacunacionId })).recordset[0];
            if (!vacuna) vacuna = "No se encontró la vacuna";
            return res.status(200).json(vacuna);
        } catch (error) {
            return res.status(500).json('Ha ocurrido un error');
        }
    }
}