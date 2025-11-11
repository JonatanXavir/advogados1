const Sequelize = require('sequelize');
const db = require('./conexao.js');

class Processo {
  #id_advogado;
  #descricao;
  #status;
  #numero_processo;

  // constructor() {
  //   get 
  //   this.#id_advogado = id;
  // }

  // get id() {
  //   return this.#id_advogado;
  // }

  // get descricao() {
  //   return this.#descricao;
  // }
  // set descricao(descricao) {
  //   this.#descricao = descricao;
  // }

  // get status() {
  //   return this.#status;
  // }
  // set status(status) {
  //   this.#status = status;
  // }

  // get numero_processo() {
  //   return this.#numero_processo;
  // }
  // set numero_processo(numero) {
  //   this.#numero_processo = numero;
  // }
  constructor() { }

  get numero_processo() {
    return this.#numero_processo;
  }
  set numero_processo(numero) {
    this.#numero_processo = numero;
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
  get id_advogado() {
    return this.#id_advogado;
  }
  set id_advogado(id_advogado) {
    this.#id_advogado = id_advogado;
  }
  static findAllByAdvogadoId(id_advogado) {
    return ProcessoModel.findAll({ where: { id_advogado } });
  }

  static create(novoProcesso) {
    return ProcessoModel.create(novoProcesso);
  }

  static update(dados, id_advogado, id_processo) {
    return ProcessoModel.update(dados, {
      where: {
        id: id_processo,
        id_advogado: id_advogado,
      },
    });
  }

  static findOne(id_advogado, id_processo) {
    return ProcessoModel.findOne({ where: { id: id_processo, id_advogado: id_advogado } });
  }

  static async delete(id_processo) {
    try {
      const processo = await ProcessoModel.findByPk(id_processo);
      if (processo) {
        await processo.destroy();
        return true;
      }
      return false;
    } catch (error) {
      throw error;
    }
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
    allowNull: true,
  },
  descricao: {
    type: Sequelize.STRING(80),
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  numero_processo: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
});

module.exports = { Processo, ProcessoModel };