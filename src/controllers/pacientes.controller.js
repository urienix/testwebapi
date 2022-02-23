const pool = require('../config/connection');

module.exports = {
    getPacientes: async (req, res) => {
        try {
            let pacientes = (await pool.exec('SP_OBTENER_TODOS_PACIENTES')).recordset;
            return res.status(200).json(pacientes);
        } catch (error) {
            return res.status(500).json('Ha ocurrido un error');
        }
    },

    getPaciente: async (req, res) => {
        try {
            let { PacienteId } = req.params;
            let paciente = (await pool.exec('SP_OBTENER_PACIENTE', { PacienteId })).recordset[0];
            if (!paciente) paciente = 'Información de paciente no disponible';
            return res.status(200).json(paciente);
        } catch (error) {
            return res.status(500).json('Ha ocurrido un error');
        }
    },
    
    guardarPaciente: async (req, res) => {
        try {
            let { Expediente, Nombres, Apellidos, Sexo, Fecha_Nacimiento, Edad, TipoEdad } = req.body;
            await pool.exec('SP_GUARDAR_PACIENTE', { Expediente, Nombres, Apellidos, Sexo, Fecha_Nacimiento, Edad, TipoEdad });
            return res.status(200).json('Información de paciente guardada con exito');
        } catch (error) {
            console.log(error);
            return res.status(500).json('Ha ocurrido un error');
        }
    }
}