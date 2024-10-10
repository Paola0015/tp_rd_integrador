CREATE TABLE IF NOT EXISTS `usuariosTipo` (
	`idUsuarioTipo` int AUTO_INCREMENT NOT NULL UNIQUE,
	`descripcion` varchar(256) NOT NULL,
	`activo` tinyint NOT NULL,
	PRIMARY KEY (`idUsuarioTipo`)
);

CREATE TABLE IF NOT EXISTS `usuarios` (
	`idUsuario` int AUTO_INCREMENT NOT NULL UNIQUE,
	`nombre` varchar(256) NOT NULL,
	`apellido` varchar(256) NOT NULL,
	`correoElectronico` varchar(256) NOT NULL UNIQUE,
	`contrasenia` varchar(256) NOT NULL,
	`idTipoUsuario` int NOT NULL,
	`imagen` varchar(256),
	`activo` tinyint NOT NULL DEFAULT '1',
	PRIMARY KEY (`idUsuario`)
);

CREATE TABLE IF NOT EXISTS `oficinas` (
	`idOficina` int AUTO_INCREMENT NOT NULL UNIQUE,
	`nombre` varchar(256) NOT NULL,
	`idReclamoTipo` int NOT NULL,
	`activo` tinyint NOT NULL DEFAULT '1',
	PRIMARY KEY (`idOficina`)
);

CREATE TABLE IF NOT EXISTS `usuariosOficinas` (
	`idUsuarioOficina` int AUTO_INCREMENT NOT NULL UNIQUE,
	`idUsuario` int NOT NULL,
	`idOficina` int NOT NULL,
	`activo` tinyint NOT NULL DEFAULT '1',
	PRIMARY KEY (`idUsuarioOficina`)
);

CREATE TABLE IF NOT EXISTS `reclamosTipo` (
	`idReclamoTipo` int AUTO_INCREMENT NOT NULL UNIQUE,
	`descripcion` varchar(256) NOT NULL,
	`activo` tinyint NOT NULL,
	PRIMARY KEY (`idReclamoTipo`)
);

CREATE TABLE IF NOT EXISTS `reclamosEstado` (
	`idReclamoEstado` int AUTO_INCREMENT NOT NULL UNIQUE,
	`descripcion` varchar(256) NOT NULL,
	`activo` tinyint NOT NULL,
	PRIMARY KEY (`idReclamoEstado`)
);

CREATE TABLE IF NOT EXISTS `reclamos` (
	`idReclamo` int AUTO_INCREMENT NOT NULL UNIQUE,
	`asunto` varchar(256) NOT NULL,
	`descripcion` varchar(256),
	`fechaCreado` datetime NOT NULL,
	`fechaFinalizado` datetime,
	`fechaCancelado` datetime,
	`idReclamoEstado` int NOT NULL,
	`idReclamoTipo` int NOT NULL,
	`idUsuarioCreador` int NOT NULL,
	`idUsuarioFinalizador` int,
	PRIMARY KEY (`idReclamo`)
);


ALTER TABLE `usuarios` ADD CONSTRAINT `usuarios_fk5` FOREIGN KEY (`idTipoUsuario`) REFERENCES `usuariosTipo`(`idUsuarioTipo`);
ALTER TABLE `oficinas` ADD CONSTRAINT `oficinas_fk2` FOREIGN KEY (`idReclamoTipo`) REFERENCES `reclamosTipo`(`idReclamoTipo`);
ALTER TABLE `usuariosOficinas` ADD CONSTRAINT `usuariosOficinas_fk1` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios`(`idUsuario`);

ALTER TABLE `usuariosOficinas` ADD CONSTRAINT `usuariosOficinas_fk2` FOREIGN KEY (`idOficina`) REFERENCES `oficinas`(`idOficina`);


ALTER TABLE `reclamos` ADD CONSTRAINT `reclamos_fk6` FOREIGN KEY (`idReclamoEstado`) REFERENCES `reclamosEstado`(`idReclamoEstado`);

ALTER TABLE `reclamos` ADD CONSTRAINT `reclamos_fk7` FOREIGN KEY (`idReclamoTipo`) REFERENCES `reclamosTipo`(`idReclamoTipo`);

ALTER TABLE `reclamos` ADD CONSTRAINT `reclamos_fk8` FOREIGN KEY (`idUsuarioCreador`) REFERENCES `usuarios`(`idUsuario`);

ALTER TABLE `reclamos` ADD CONSTRAINT `reclamos_fk9` FOREIGN KEY (`idUsuarioFinalizador`) REFERENCES `usuarios`(`idUsuario`);