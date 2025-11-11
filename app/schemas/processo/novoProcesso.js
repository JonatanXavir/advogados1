module.exports = {
  type: 'object',
  properties: {
    descricao: { type: 'string' },
    numero_processo: { type: 'string', maxLength: 20  },
    status: { type: 'string'},
  },
  required: ['descricao', 'numero_processo', 'status'],
    additionalProperties: false,
};