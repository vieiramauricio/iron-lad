import api from '../../services/api';

async function getProdutos(request, response) {
  const res = await api.get('/produtos');
  response.json(res.data);
};

export default getProdutos;