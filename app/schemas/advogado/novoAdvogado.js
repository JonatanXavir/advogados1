module.exports = {
  type: 'object',
  properties: {
    nome: { type: 'string' },
    oab: { type: 'string', maximum: 8 },
    especialidade: { type: 'string', maximum: 100 },
    
  },
  required: ['nome', 'oab', 'especialidade'],
  additionalProperties: false,
};
