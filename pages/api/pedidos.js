import api from '../../services/api';

async function getPedidos(request, response) {
  const res = await api.get('/pedidos');
  response.json(res.data);
};

export default getPedidos;