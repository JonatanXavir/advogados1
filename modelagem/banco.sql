-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema apiplayerdb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema apiplayerdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `adv1` ;
USE `adv1` ;

-- -----------------------------------------------------
-- Table `apiplayerdb`.`jogador`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `adv1`.`advogado` ;

CREATE TABLE IF NOT EXISTS `adv1`.`advogado` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(200) NOT NULL,
  `oab` INT NOT NULL,
  `especialidade` INT NOT NULL,
  
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `apiplayerdb`.`equipamento`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `adv1`.`processo` ;

CREATE TABLE IF NOT EXISTS `adv1`.`processo` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_advogado` INT NOT NULL,
  `descricao` VARCHAR(150) NULL,
  `status` INT NULL,
  `numero_processo` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_processo_advogado1_idx` (`id_advogado` ASC),
  CONSTRAINT `fk_processo_advogado1`
    FOREIGN KEY (`id_advogado`)
    REFERENCES `adv1`.`advogado` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `apiplayerdb`.`equipamento`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `adv1`.`processo` ;

CREATE TABLE IF NOT EXISTS `adv1`.`processo` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_advogado` INT NOT NULL,
  `descricao` VARCHAR(150) NULL,
  `status` INT NULL,
  `numero_processo` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_processo_advogado1_idx` (`id_advogado` ASC),
  CONSTRAINT `fk_processo_advogado1`
    FOREIGN KEY (`id_advogado`)
    REFERENCES `adv1`.`advogado` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Data for table `apiplayerdb`.`jogador`
-- -----------------------------------------------------
START TRANSACTION;
USE `adv1`;
INSERT INTO `adv1`.`adogado` (`id`, `nome`, `oab`, `especialidade`, ) VALUES (DEFAULT, 'advogado1', 12345, "civil");

COMMIT;


-- -----------------------------------------------------
-- Data for table `apiplayerdb`.`equipamento`
-- -----------------------------------------------------
START TRANSACTION;
USE `adv1`;
INSERT INTO `adv1`.`processo` (`id`, `id_advogado`, `descricao`, `status`, `numero_processo`) VALUES (DEFAULT, 1, 'civil', 1, 2017082012345678);
INSERT INTO `adv1`.`processo` (`id`, `id_advogado`, `descricao`, `status`, `numero_processo`) VALUES (DEFAULT, 1, 'civil', 2, 2017082012345679);

COMMIT;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

