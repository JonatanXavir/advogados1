const models = require('../models');
const Equipamento = models.equipamento.Equipamento;
const Ajv = require('ajv');
const localize = require('ajv-i18n/localize/pt-BR');
const schema = require('../schemas/equipamento/novoEquipamento.js')
const ajv = new Ajv({ allErrors: true }); // É importante ter allErrors: trueconst schema = require('../schemas/equipamento/novoEquipamento.js');
const validacao = ajv.compile(schema);

class EquipamentoController {
  findByJogador(request, response) {
    Equipamento.findAllByJogadorId(request.params.id_jogador)
      .then((equipamentos) => {
        if (equipamentos && equipamentos.length > 0) {
          return response.status(200).json(equipamentos);
        }
        return response.status(404).json({ message: 'Nenhum equipamento encontrado para este jogador' });
      })
      .catch((error) => {
        return response.status(500).json({ message: error.message });
      });
  }
  

  create(request, response) {
    let validacoes = validacao(request.body);
    if (!validacoes) {
      let mensagem = validacao.errors[0].instancePath.replace('/', '');
      mensagem += ' ' + validacao.errors[0].message;
      return response.status(400).json({
        message: mensagem,
      });
    }
    

    const equipamentoParaCriar = {
      ...request.body,
      id_jogador: request.params.id_jogador,
    };

    Equipamento.create(equipamentoParaCriar)
      .then((novoEquipamento) => {
        return response.status(201).json(novoEquipamento);
      })
      .catch((erro) => {
        return response.status(500).json({ message: 'erro no servidor: ' + erro.message });
      });
  }
  
}

module.exports = new EquipamentoController();
