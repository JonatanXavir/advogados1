const models = require('../models/index.js');
const Processo = models.processo.Processo;
const Ajv = require('ajv');
const localize = require('ajv-i18n/localize/pt-BR');
const schema = require('../schemas/processo/novoProcesso.js')
const ajv = new Ajv({ allErrors: true }); // É importante ter allErrors: trueconst schema = require('../schemas/processo/novoProcesso.js');
const validacao = ajv.compile(schema);

class ProcessoController {
  findByAdvogado(request, response) {
    Processo.findAllByAdvogadoId(request.params.id_processo)
      .then((processos) => {
        if (processos && processos.length > 0) {
          return response.status(200).json(processos);
        }
        return response.status(404).json({ message: 'Nenhum processo encontrado para este advogado' });
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
    

    const processoParaCriar = {
      ...request.body,
      id_advogado: request.params.id_advogado,
    };

    Processo.create(processoParaCriarParaCriar)
      .then((novoProcesso) => {
        return response.status(201).json(novoProcesso);
      })
      .catch((erro) => {
        return response.status(500).json({ message: 'erro no servidor: ' + erro.message });
      });
  }
  
}

module.exports = new ProcessoController();
