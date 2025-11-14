const express = require('express');
var router = express.Router();
const processoController = require('../controllers/ProcessoController.js');
const authMiddleware = require('../middlewares/TokenValido.js');

//retorna todos os processo de um advogado
router.get('/advogado/:id_advogado/processo', [authMiddleware.check], processoController.findByAdvogado);

//cria um novo processo para um advogado
router.post('/advogado/:id_advogado/processo', [authMiddleware.check], processoController.create);

router.put('/advogado/:id_advogado/processo/:id_processo', [authMiddleware.check], processoController.update);

//exclui um processo pelo seu id
router.delete('/advogado/:id_advogado/processo/:id_processo', [authMiddleware.check], processoController.delete);

module.exports = router;