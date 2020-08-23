import api from '../../services/api';

async function getDashboard(request, response) {
  const res = await api.get('/dashboard');
  response.json(res.data);
};

export default getDashboard;