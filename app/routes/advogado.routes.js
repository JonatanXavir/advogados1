const express = require('express');
var router = express.Router();
const advogadoController = require('../controllers/AdvogadoController.js');
const authMiddleware = require('../middlewares/TokenValido.js');

//retorna todos 
router.get('/advogado', [authMiddleware.check], advogadoController.findAll);

//recupera  pelo seu id
router.get('/advogado/:id', [authMiddleware.check], advogadoController.find);

//cria um novo
router.post('/advogado', [authMiddleware.check], advogadoController.create);

//atualiza pelo seu id
router.put('/advogado/:id', [authMiddleware.check], advogadoController.update);

//exclui  pelo seu id
router.delete('/advogado/:id', [authMiddleware.check], advogadoController.delete);

module.exports = router;
