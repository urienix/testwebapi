CREATE DATABASE TestWebApi
go

USE TestWebApi
go


CREATE TABLE Pacientes(
    PacienteId INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    Expediente NVARCHAR(20),
    Nombres NVARCHAR(50),
    Apellidos NVARCHAR(50),
    Sexo CHAR(1),
    Fecha_Nacimiento DATE,
    Edad INT,
    TipoEdad NVARCHAR(10)
)
go

CREATE TABLE Vacunas(
    VacunacionId INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    Descripcion NVARCHAR(50),
    Estado BIT
)
go

CREATE TABLE Dosis(
    DosisVacunaId INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    Descripcion NVARCHAR(50),
    Estado BIT
)
go

CREATE TABLE Vacunacion_Covid19(
    VacunacionId INT NOT NULL IDENTITY(1,1),
    PacienteId INT,
    VacunaId INT,
    DosisId INT,
    FechaCreacion DATE,
    FechaUltimaModificacion DATE,
    PRIMARY KEY (VacunacionId),
    FOREIGN KEY (PacienteId) REFERENCES Pacientes(PacienteId),
    FOREIGN KEY (VacunaId) REFERENCES Vacunas(VacunacionId),
    FOREIGN KEY (DosisId) REFERENCES Dosis(DosisVacunaId)
)
go


-- PROCEDIMIENTOS DE CREACION DE NUEVOS REGISTROS
CREATE PROCEDURE SP_NUEVO_PACIENTE
    @Expediente NVARCHAR(20),
    @Nombres NVARCHAR(50),
    @Apellidos NVARCHAR(50),
    @Sexo CHAR(1),
    @Fecha_Nacimiento DATE,
    @Edad INT,
    @TipoEdad NVARCHAR(10)
AS
BEGIN
    INSERT INTO Pacientes(Expediente, Nombres, Apellidos, Sexo, Fecha_Nacimiento, Edad, TipoEdad)
    VALUES(@Expediente, @Nombres, @Apellidos, @Sexo, @Fecha_Nacimiento, @Edad, @TipoEdad)
END
go

CREATE PROCEDURE SP_NUEVA_VACUNA
    @Descripcion NVARCHAR(50),
    @Estado BIT
AS
BEGIN
    INSERT INTO Vacunas(Descripcion, Estado)
    VALUES(@Descripcion, @Estado)
END
go

CREATE PROCEDURE SP_NUEVA_DOSIS
    @Descripcion NVARCHAR(50),
    @Estado BIT
AS
BEGIN
    INSERT INTO Dosis(Descripcion, Estado)
    VALUES(@Descripcion, @Estado)
END
go

CREATE PROCEDURE SP_NUEVA_VACUNA_COVID19
    @PacienteId INT,
    @VacunaId INT,
    @DosisId INT
AS
BEGIN
    INSERT INTO Vacunacion_Covid19(PacienteId, VacunaId, DosisId, FechaCreacion, FechaUltimaModificacion)
    VALUES(@PacienteId, @VacunaId, @DosisId, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
END
go



-- PROCEDIMIENTOS DE ACTUALIZACION DE REGISTROS
CREATE PROCEDURE SP_ACTUALIZAR_PACIENTE
    @PacienteId INT,
    @Expediente NVARCHAR(20),
    @Nombres NVARCHAR(50),
    @Apellidos NVARCHAR(50),
    @Sexo CHAR(1),
    @Fecha_Nacimiento DATE,
    @Edad INT,
    @TipoEdad NVARCHAR(10)
AS
BEGIN
    UPDATE Pacientes
    SET Expediente = @Expediente, Nombres = @Nombres, Apellidos = @Apellidos, Sexo = @Sexo, Fecha_Nacimiento = @Fecha_Nacimiento, Edad = @Edad, TipoEdad = @TipoEdad
    WHERE PacienteId = @PacienteId
END
go

CREATE PROCEDURE SP_ACTUALIZAR_VACUNA
    @VacunacionId INT,
    @Descripcion NVARCHAR(50),
    @Estado BIT
AS
BEGIN
    UPDATE Vacunas
    SET Descripcion = @Descripcion, Estado = @Estado
    WHERE VacunacionId = @VacunacionId
END
go

CREATE PROCEDURE SP_ACTUALIZAR_DOSIS
    @DosisVacunaId INT,
    @Descripcion NVARCHAR(50),
    @Estado BIT
AS
BEGIN
    UPDATE Dosis
    SET Descripcion = @Descripcion, Estado = @Estado
    WHERE DosisVacunaId = @DosisVacunaId
END
go

CREATE PROCEDURE SP_ACTUALIZAR_VACUNA_COVID19
    @VacunacionId INT,
    @PacienteId INT,
    @VacunaId INT,
    @DosisId INT
AS
BEGIN
    UPDATE Vacunacion_Covid19
    SET PacienteId = @PacienteId, VacunaId = @VacunaId, DosisId = @DosisId, FechaUltimaModificacion = CURRENT_TIMESTAMP
    WHERE VacunacionId = @VacunacionId
END
go


-- PROCEDIMIENTOS DE GUARDADO DE REGISTROS
CREATE PROCEDURE SP_GUARDAR_PACIENTE
    @Expediente NVARCHAR(20),
    @Nombres NVARCHAR(50),
    @Apellidos NVARCHAR(50),
    @Sexo CHAR(1),
    @Fecha_Nacimiento DATE,
    @Edad INT,
    @TipoEdad NVARCHAR(10)
AS
BEGIN
    DECLARE @PacienteId INT
    SET @PacienteId = (SELECT PacienteId FROM Pacientes where Expediente = @Expediente)
    IF @PacienteId IS NULL
        BEGIN
            EXEC SP_NUEVO_PACIENTE @Expediente, @Nombres, @Apellidos, @Sexo, @Fecha_Nacimiento, @Edad, @TipoEdad
        END
    ELSE
        BEGIN
            EXEC SP_ACTUALIZAR_PACIENTE @PacienteId, @Expediente, @Nombres, @Apellidos, @Sexo, @Fecha_Nacimiento, @Edad, @TipoEdad
        END
END
go


-- PROCEDIMIENTOS DE OBTENER REGISTROS
CREATE PROCEDURE SP_OBTENER_PACIENTE
    @PacienteId INT
AS
BEGIN
    SELECT * FROM Pacientes WHERE PacienteId = @PacienteId
END
go

CREATE PROCEDURE SP_OBTENER_VACUNA
    @VacunacionId INT
AS
BEGIN
    SELECT * FROM Vacunas WHERE VacunacionId = @VacunacionId
END
go

CREATE PROCEDURE SP_OBTENER_DOSIS
    @DosisVacunaId INT
AS
BEGIN
    SELECT * FROM Dosis WHERE DosisVacunaId = @DosisVacunaId
END
go

CREATE PROCEDURE SP_OBTENER_VACUNA_COVID19BYID
    @VacunacionId INT
AS
BEGIN
    SELECT * FROM Vacunacion_Covid19 
    WHERE VC.VacunacionId = @VacunacionId
END
go

-- procedimientos de obtener todos los registros

CREATE PROCEDURE SP_OBTENER_TODOS_PACIENTES
AS
BEGIN
    SELECT * FROM Pacientes
END

CREATE PROCEDURE SP_OBTENER_TODOS_VACUNAS
AS
BEGIN
    SELECT * FROM Vacunas
END

CREATE PROCEDURE SP_OBTENER_TODOS_DOSIS
AS
BEGIN
    SELECT * FROM Dosis
END
go

CREATE PROCEDURE SP_OBTENER_TODOS_VACUNAS_COVID19
AS
BEGIN
    SELECT * FROM Vacunacion_Covid19 VC INNER JOIN Pacientes P ON VC.PacienteId = P.PacienteId INNER JOIN Vacunas V ON VC.VacunaId = V.VacunaId INNER JOIN Dosis D ON VC.DosisId = D.DosisVacunaId
END
go

CREATE PROCEDURE SP_OBTENER_TODOS_VACUNAS_COVID19_POR_PACIENTE
    @PacienteId INT
AS
BEGIN
    SELECT * FROM Vacunacion_Covid19 
END


-- PROCEDIMIENTOS DE VACUNACION
CREATE PROCEDURE SP_VACUNAR_PACIENTE
    @PacienteId INT,
    @VacunaId INT,
    @DosisId INT
AS
BEGIN
    DECLARE @VacunacionId INT
    SET @VacunacionId = (SELECT VacunacionId FROM Vacunacion_Covid19 WHERE PacienteId = @PacienteId)
    IF @VacunacionId IS NULL
        BEGIN
            EXEC SP_NUEVA_VACUNA_COVID19 @PacienteId, @VacunaId, @DosisId
        END
    ELSE
        BEGIN
            EXEC SP_ACTUALIZAR_VACUNA_COVID19 @VacunacionId, @PacienteId, @VacunaId, @DosisId
        END
END


-- DATOS PRECARGADOS

EXEC SP_NUEVA_VACUNA 'AztraZeneca', 1
go

EXEC SP_NUEVA_VACUNA 'Sputnik', 1
go

EXEC SP_NUEVA_VACUNA 'Moderna', 1
go

EXEC SP_NUEVA_VACUNA 'Pfizer', 1
go


EXEC SP_NUEVA_DOSIS '1era Dosis', 1
go

EXEC SP_NUEVA_DOSIS '2nda Dosis', 1
go

EXEC SP_GUARDAR_PACIENTE '0801199012345', 'Yadier Benjamín', 'Molina Luciano', 'M', '13/07/1982', 39, 'Años'