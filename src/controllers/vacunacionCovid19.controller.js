const pool = require('../config/connection');

module.exports = {
    getVacunacionCovid19: async (req, res) => {
        try {
            let vacunacionCovid19 = (await pool.exec('SP_OBTENER_TODOS_VACUNAS_COVID19')).recordset;
            return res.status(200).json(vacunacionCovid19);
        } catch (error) {
            return res.status(500).json('Ha ocurrido un error');
        }
    },

    getVacunacionCovid19ById: async (req, res) => {
        try {
            let { VacunacionId } = req.params;
            let vacunacionCovid19 = (await pool.exec('SP_OBTENER_VACUNA_COVID19BYID', { VacunacionId })).recordset[0];
            if (!vacunacionCovid19) vacunacionCovid19 = 'Información de vacunación no disponible';
            return res.status(200).json(vacunacionCovid19);
        } catch (error) {
            return res.status(500).json('Ha ocurrido un error');
        }
    },

    vacunarPaciente: async (req, res) => {
        try{
            let { PacienteId, VacunaId, DosisId } = req.body;
            await pool.exec('SP_VACUNAR_PACIENTE', { PacienteId, VacunaId, DosisId });
            return res.status(200).json('Información de vacunación guardada con exito');
        }catch(err){
            return res.status(500).json('Ha ocurrido un error');
        }
    }
}