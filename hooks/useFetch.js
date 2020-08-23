import api from '../services/api';

const useFetch = async (url) => {
  const res = await api.get(url);
  return res.data
}

export default useFetch;