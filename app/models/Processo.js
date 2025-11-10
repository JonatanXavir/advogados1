const Sequelize = require('sequelize');
const db = require('./conexao.js');

class Processo {
  #descricao;
  #status;
  #numero_processo;

  construct() {}

  get descricao() {
    return this.#descricao;
  }
  set descricao(descricao) {
    this.#descricao = descricao;
  }

  get status() {
    return this.#status;
  }
  set status(bonus) {
    this.#status = bonus;
  }

  get numero_processo() {
    return this.#numero_processo;
  }
  set numero_processo(bonus) {
    this.#numero_processo = bonus;
  }

  static findAllByAdvogadoId(id_advogado) {
    return ProcessoModel.findAll({ where: { id_advogado } });
  }

  static create(novoProcesso) {
    return ProcessoModel.create(novoProcesso);
  }
}

const ProcessoModel = db.define('processo', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    },
  id_jogador: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  descricao: {
    type: Sequelize.STRING(80),
    allowNull: false,
  },
  bonus_ataque: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  bonus_defesa: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = { Processo, ProcessoModel };