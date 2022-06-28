const axios = require('axios');

const viaCepModel = {
  async getByNumber(cep) {
    const endpoint = `https://viacep.com.br/ws/${cep}/json/`
    const response = await axios.get(endpoint);
    return response;
  },
}

module.exports = viaCepModel;