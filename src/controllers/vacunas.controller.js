const pool = require('../config/connection');

module.exports = {
    getVacunas: async (req, res) => {
        try {
            let vacunas = (await pool.exec('SP_OBTENER_TODOS_VACUNAS')).recordset;
            return res.status(200).json(vacunas);
        } catch (error) {
            return res.status(500).json('Ha ocurrido un error');
        }
    }
}