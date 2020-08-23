import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Inside from '../components/layouts/Inside';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/Auth';
import useFetch from '../hooks/useFetch';
import axios from 'axios'

const Dashboard = () => {

  const { state } = useAuth();
  const [signed, setSigned] = useState(false);
  const [products, setProducts] = useState([]);
  const [vendas, setVendas] = useState([]);
  const router = useRouter();

  const getDashboard = async () => {
    const res = await axios.get('/api/dashboard');

    const { produtos, vendas } = res.data;

    setProducts(produtos);
    setVendas(vendas);
  };


  useEffect(() => {
    if (!state.token) {
      router.push('/')
    }else{
      setSigned(true);
      getDashboard();
    }
  }, []);

  return (
    <>
      {
        signed ?
          <>
            <Head>
              <title>Dashboard | Iron Lad</title>
            </Head>
            <>
              <Navbar />
              <Inside>
                <h1>Dashboard</h1>

                <div>
                  <ul>
                    <li>Aprovados</li>
                    <li>{products.aprovados}</li>
                  </ul>
                </div>
              </Inside>
            </>
          </> 
          :
          <></>
      }
    </>
  )
}

export default Dashboard;
