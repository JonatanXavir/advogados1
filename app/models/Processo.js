const Sequelize = require('sequelize');
const db = require('./conexao.js');

class Processo {
  #id;
  #descricao;
  #status;
  #numero_processo;

  constructor(id) {
    this.#id = id;
  }

  get id() {
    return this.#id;
  }

  get descricao() {
    return this.#descricao;
  }
  set descricao(descricao) {
    this.#descricao = descricao;
  }

  get status() {
    return this.#status;
  }
  set status(status) {
    this.#status = status;
  }

  get numero_processo() {
    return this.#numero_processo;
  }
  set numero_processo(numero) {
    this.#numero_processo = numero;
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
  id_advogado: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  descricao: {
    type: Sequelize.STRING(80),
    allowNull: false,
  },
  status: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  numero_processo: {
    type: Sequelize.STRING, 
    allowNull: true,
  },
});

module.exports = { Processo, ProcessoModel };