const express = require('express');
var router = express.Router();
const advogadoController = require('../controllers/AdvogadoController.js');
const processoController = require('../controllers/ProcessoController.js');
const authMiddleware = require('../middlewares/TokenValido.js');

//retorna todos os jogadores
router.get('/advogado', [authMiddleware.check], advogadoController.findAll);

//recupera um jogador pelo seu id
router.get('/advogado/:id', [authMiddleware.check], advogadoController.find);

//cria um novo jogador
router.post('/advogado', [authMiddleware.check], advogadoController.create);

//atualiza um jogador pelo seu id
router.put('/advogado/:id', [authMiddleware.check], advogadoController.update);

//exclui um jogador pelo seu id
router.delete('/advogado/:id', [authMiddleware.check], advogadoController.delete);

//retorna todos os equipamentos de um jogador
router.get('/advogado/:id_advogado/equipamento', [authMiddleware.check], processoController.findByJogador);

//cria um novo equipamento para um jogador
router.post('/advogado/:id_advogado/equipamento', [authMiddleware.check], processoController.create);

//router.put('/jogador/:id_jogador/equipamento/:id_equipamento', [authMiddleware.check], equipamentoController.update);

module.exports = router;