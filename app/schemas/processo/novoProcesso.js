module.exports = {
  type: 'object',
  properties: {
    descricao: { type: 'string' },
    oab: { type: 'integer' },
    especialidade: { type: 'integer' },
  },
  required: ['descricao', 'oab', 'especialidade'],
    additionalProperties: false,
};