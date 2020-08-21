import api from '../services/api';
import useSWR from 'swr'

const useFetchSWR = (url) => {

  const fetcher = async () => {
    const res = await api.get(url);
    return res.data
  };

  const { data, error } = useSWR(url, fetcher);

  return { data, error}
}

export default useFetchSWR;